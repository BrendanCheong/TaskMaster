Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        # Allow anyone to access REST API for now, change it to be for specific website only later
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete]
    end
end