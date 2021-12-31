module Api
    module V1
        class TasksController < ApplicationController

            def index
                tasks = Task.all
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
            end

            # find task by id
            def show
                task = Task.find_by(id: params[:task_id])
                render json: TaskSerializer.new(task).serialized_json, status: 200
            end

            # create task
            def create
                input = task_params
                input[:endDate] = DateTime.strptime(task_params[:endDate], '%d/%m/%Y %H:%M')
                input[:user_id] = decoded_token[:id]
                task = Task.new(input)

                if task.save
                    render json: { success: 'Task created successfully' }, status: 200
                else
                    render json: { error: task.errors.messages }, status: 422
                end
            end

            # find tasks by user_id
            def user_id
                tasks = Task.where(user_id: decoded_token[:id])
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
            end

            # find task by tag names array, duplicate names allowed (but not allowed on front-end anyways)
            def task_filter
                tasks = Task.includes(:tags)
                    .where(tags: { tagName: tags_params })
                    .where(user_id: decoded_token[:id])
                    .pluck(:id)
                answer = Task.where(id: tasks)
                render json: TaskSerializer.new(answer).serialized_json, status: 200
            end

            # update task by id
            def update
                task = Task.find_by(id: params[:id])

                if task.update(task_params)
                    render json: TaskSerializer.new(task).serialized_json
                else
                    render json: { error: task.errors.messages }, status: 422
                end
            end

            # delete task by id
            def destroy
                task = Task.find_by(id: params[:id]).destroy!

                render json: { success: 'Task deleted successfully!' }, status: 200
            end

            private

            def task_params
                params.require(:task).permit(:title, :content, :status, :endDate)
            end

            def decoded_token
                AuthenticationTokenService.decode(cookies[:token])
            end

            def tags_params
                return params.permit(tagName: [])["tagName"].uniq
            end
        end
    end
end