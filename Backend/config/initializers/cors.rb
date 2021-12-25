Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        # Allow localhost to access REST API for now, change it to be for specific website only later
        origins 'http://localhost:8888'
        resource '*', 
            headers: :any, 
            methods: [:get, :post, :patch, :put, :delete, :options, :head],
            credentials: true
    end
end