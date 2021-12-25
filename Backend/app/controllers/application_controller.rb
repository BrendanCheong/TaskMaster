class ApplicationController < ActionController::API

    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    rescue_from ActiveRecord::RecordNotDestroyed, with: :unprocessable
    rescue_from ActiveRecord::RecordInvalid, with: :param_missing
    rescue_from ActionController::ParameterMissing, with: :param_missing
    rescue_from JWT::DecodeError, JWT::VerificationError, with: :unprocessable

    protect_from_forgery with: :exception

    before_action :authenticate

    private

    def unprocessable(e)
        render json: { error: e.record.errors }, status: :unprocessable_entity
    end

    def param_missing(e)
        render json: { error: e.message }, status: :unprocessable_entity
    end

    def authenticate
        decoded = AuthenticationTokenService.decode(cookies[:token])
        @user = User.find_by(id: decoded[:id])

        render json: { error: 'Authentication failed, user not found!' }, status: 422 unless @user
    end
end
