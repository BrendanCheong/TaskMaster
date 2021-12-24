class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotDestroyed, with: :not_destroyed
    rescue_from ActionController::ParameterMissing, with: :param_missing

    before_action :authenticate

    private

    def not_destroyed(e)
        render json: {error: e.record.errors}, status: :unprocessable_entity
    end

    def param_missing(e)
        render json: {error: e.message}, status: :unprocessable_entity
    end

    def authenticate
        puts "wassup dog?"
    end
end
