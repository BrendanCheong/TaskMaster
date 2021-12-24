module Api
    module V1
        class AuthenticationController < ApplicationController

            def create
                p user_params

                user = User.find_by(email: params[:email])
                token = AuthenticationTokenService.call(user)

                if user.present?
                    render json: { token: token }, status: :created
                else
                    render json: { error: "User not found" }, status: :unprocessable_entity
                end
            end

            private

            def user_params
                params.permit(:name, :email)
            end
        end
    end
end