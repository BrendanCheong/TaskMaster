Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        # Allow localhost to access REST API for now, change it to be for specific website only later
        origins 'localhost:8888', '127.0.0.1:8888',
        /\Ahttp:\/\/192\.168\.0\.\d{1,3}(:\d+)?\z/
        resource '*', 
            headers: :any, 
            methods: [:get, :post, :patch, :put, :delete, :options, :head],
            credentials: true
    end
end