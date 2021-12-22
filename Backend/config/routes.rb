Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      # custom paths
      get '/tasks/user_id/:id', to: "tasks#user_id"
      post '/tasks/tag_filter/:id', to: "tasks#task_filter"

      resources :users
      resources :tasks
      resources :tags, only: [:index, :create, :show, :destroy]
    end
  end
end
