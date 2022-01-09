module Api
    module V1
        class TasksController < ApplicationController

            def index
                tasks = Task.all
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
            end

            # find task by id
            # users can only view their tasks not anyone else's
            def show
                task = Task.find_by(id: params[:id], user_id: decoded_token[:id])
                render json: TaskSerializer.new(task).serialized_json, status: 200
            end

            # create task
            def create
                begin
                    input = task_params
                    input[:endDate] = DateTime.strptime(input[:endDate], '%d/%m/%Y %H:%M')
                    input[:user_id] = decoded_token[:id]
                    task = Task.new(input)
                    if task.save!
                        if params[:tags].length() > 0
                            create_tags(params[:tags], task[:id])
                        end
                        render json: TaskSerializer.new(task).serialized_json, status: 200
                    else
                        raise Exception.new task.errors.messages
                    end
                rescue Exception => e
                    render json: { error: e }, status: 422
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

                render json: TaskSerializer.new(task).serialized_json, status: 200
            end

            private

            def task_params
                params.require(:task).permit(:title, :content, :status, :endDate, :tags => [])
            end

            def decoded_token
                AuthenticationTokenService.decode(cookies[:token])
            end

            def tags_params
                return params.permit(tagName: [])["tagName"].uniq
            end

            def create_tags(tags, id)
                tag_array = tags.map { |name| 
                    {
                        'tagName' => name, 
                        'task_id' => id
                    }
                }
                tags = Tag.insert_all!(tag_array)
            end
        end
    end
end