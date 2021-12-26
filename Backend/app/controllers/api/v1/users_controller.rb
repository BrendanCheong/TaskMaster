module Api
    module V1
        class UsersController < ApplicationController

            skip_before_action :authenticate, only: %i[login register]

            def login
                user = User.find_by(email: params[:email])

                if user.present? && user.authenticate(params.require(:password))
                    token = AuthenticationTokenService.encode(user)
                    cookie_time(token)
                    render json: { success: 'User logged In' }
                else
                    render json: { error: 'User not found' }, status: 422
                end
            end

            def register
                user = User.new(user_params)

                if user.save
                    token = AuthenticationTokenService.encode(user)
                    render json: { success: 'User created!' }
                else
                    render json: { error: user.errors.messages }, status: 422
                end
            end

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

            # PUT/:id
            def update
                user = User.find_by(id: params[:id])

                if user.update(user_params) && user.authenticate(params[:confirm_password])
                    render json: UserSerializer.new(user).serialized_json
                else
                    render json: { error: user.errors.messages }, status: 422
                end
            end

            # DELETE/:id
            def destroy
                user = User.find_by(id: params[:id]).destroy!

                render json: { success: 'User deleted successfully!' }, status: 200
                #head :no_content
            end

            # put this at the bottom for headers that need Json data
            private

            def user_params
                params.permit(:name, :email, :password)
            end

            def unauthenticated
                head :unauthorized
            end

            def cookie_time(token)
                response.set_cookie(
                    :token,
                    {
                        value: token,
                        httponly: true,
                        secure: Rails.env.production?,
                        path: '/'
                    }
                )
            end
        end
    end
end