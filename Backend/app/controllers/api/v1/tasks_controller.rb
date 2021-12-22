module Api
    module V1
        class TasksController < ApplicationController
            
            # update task by id
            # delete task by id
            # create task

            def index
                tasks = Task.all
                render json: TaskSerializer.new(tasks).serialized_json, status: 200
            end

            # find task by id
            def show
                task = Task.find_by(id: params[:task_id])
                render json: TaskSerializer.new(task).serialized_json, status: 200
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

            private

            def tags_params
                params.require(:tag).permit(:task_id => [])
            end
        end
    end
end