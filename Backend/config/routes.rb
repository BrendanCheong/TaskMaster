Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      # custom paths
      get '/users/refresh', to: "users#refresh"
      get '/tasks/user_id/:id', to: "tasks#user_id"
      get '/tags/tags_by_name', to: "tags#tags_by_name"
      get '/tags/tags_by_task/:task_id', to: "tags#tags_by_task"
      get '/tags/tags_by_user/:user_id', to: "tags#tags_by_user"
      post '/users/login', to: "users#login"
      post '/users/register', to: "users#register"
      post '/tasks/tag_filter', to: "tasks#task_filter"

      resources :users, only: [:index, :update, :show, :destroy]
      resources :tasks
      resources :tags, only: [:index, :create, :show, :destroy]
    end
  end
end
