module Api
    module V1
        class TagsController < ApplicationController
            # find tags by task_id
            def tags_by_task
                tags = Tag.joins(task: :user).where(tasks: { id: task_id_params })
                render json: TagSerializer.new(tags).serialized_json, status: 200
            end

            # find a tags by user_id
            def tags_by_user
                tags = Tag.joins(task: :user).where(user: { id: user_id_params })
                render json: TagSerializer.new(tags).serialized_json, status: 200
            end
            
            # delete a tag by id
            def destroy
                tag = Tag.find_by(id: params[:id]).destroy!

                render json: { success: 'Tag deleted successfully!' }, status: 200
            end

            # create tag
            def create
                begin
                    tag_array = tag_params[:tagName].map { |name| 
                        {
                            'tagName' => name, 
                            'task_id' => tag_params[:task_id] 
                        }
                    }
                    tags = Tag.insert_all!(tag_array)
                    render json: { success: 'Tags created successfully!' }, status: 200
                rescue Exception => e
                    render json: { error: e }, status: 422
                end
            end

            # get all tags
            def index
                tags = Tag.all
                render json: TagSerializer.new(tags).serialized_json, status: 200
            end

            # get a tag by id
            def show
                tag = Tag.find_by(id: params[:id])
                render json: TagSerializer.new(tag).serialized_json, status: 200
            end

            # get all tags by name
            def tags_by_name
                tags = Tag.where(tagName: tagName_params)
                render json: TagSerializer.new(tags).serialized_json, status: 200
            end

            private

            def tag_params
                params.require(:tag).permit(:task_id, :tagName => [])
            end

            def task_id_params
                return params[:task_id]
            end

            def user_id_params
                return params[:user_id]
            end

            def tagName_params
                return params.permit(:tagName)["tagName"]
            end
        end
    end
end