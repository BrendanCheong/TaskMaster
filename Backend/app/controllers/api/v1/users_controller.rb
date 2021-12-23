module Api
    module V1
        class UsersController < ApplicationController
            # GET
            def index
                users = User.all

                render json: UserSerializer.new(users).serialized_json, status: 200
            end

            # GET/:id
            def show
                @user = User.find_by(id: params[:id])

                render json: UserSerializer.new(@user).serialized_json, status: 200
            end

            # POST --json header
            def create
                user = User.new(user_params)

                if user.save
                    render json: UserSerializer.new(user).serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end

            # PUT/:id
            def update
                @user = User.find_by(id: params[:id])

                if @user.update(user_params)
                    render json: UserSerializer.new(@user).serialized_json
                else
                    render json: {error: user.errors.messages}, status: 422
                end
            end

            # DELETE/:id
            def destroy
                user = User.find_by(id: params[:id]).destroy!

                render json: {success: 'User deleted successfully!'}, status: 200
                #head :no_content
            end

            # put this at the bottom for headers that need Json data
            private

            def user_params
                params.require(:user).permit(:name, :email, :password)
            end
        end
    end
end