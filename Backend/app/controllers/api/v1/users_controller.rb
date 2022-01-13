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

                if user.save && user_params[:password] == params[:confirm_password]
                    token = AuthenticationTokenService.encode(user)
                    render json: { success: 'User created!' }
                else
                    render json: { error: user.errors.messages }, status: 422
                end
            end

            # refreshes the existing JWT token if token is valid
            # only works if the user has a valid JWT token
            # token is the exact same user data as you have before
            def refresh
                puts decoded_token
                token = AuthenticationTokenService.encode(decoded_token)
                cookie_time(token)

                render json: { success: 'User token refreshed' }, status: 200
            end

            # GET/:id
            def show
                @user = User.find_by(id: decoded_token[:id])

                render json: UserSerializer.new(@user).serialized_json, status: 200
            end

            # User must have 2 same passwords to update User details, authenticated using JWT
            def update
                user = User.find_by(id: decoded_token[:id])

                if user.update(user_params) && user_params[:password] == params[:confirm_password]
                    render json: { success: 'User details updated!' }
                else
                    render json: { error: 'User Unsuccessfully Updated' }, status: 422
                end
            end

            # put this at the bottom for headers that need Json data
            private

            def user_params
                params.permit(:name, :email, :password)
            end

            def decoded_token
                AuthenticationTokenService.decode(cookies[:token])
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