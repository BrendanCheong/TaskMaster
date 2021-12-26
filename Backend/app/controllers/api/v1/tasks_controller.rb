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
                input[:endDate] = DateTime.strptime(task_params[:endDate], "%d/%m/%Y %H:%M")
                task = Task.new(input)

                if task.save
                    render json: TaskSerializer.new(task).serialized_json
                else
                    render json: { error: task.errors.messages }, status: 422
                end
            end

            # find tasks by user_id
            def user_id
                tasks = Task.where(user_id: params[:id])
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
            end

            # find task by tag names array, by using an array of task_ids + user_id NO DUPLICATE IDs in params
            def task_filter
                tasks = Task.where(user_id: params[:id], id: tags_params)
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
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
                params.require(:task).permit(:title, :content, :status, :endDate, :user_id)
            end

            def tags_params
                return params.permit(task_id: [])["task_id"].uniq
            end
        end
    end
end