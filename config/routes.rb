Rails.application.routes.draw do

  namespace :api do
    get 'likes/create'
  end

  namespace :api do
    get 'likes/destroy'
  end

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:create, :show, :destroy, :index] do
      resources :answers, only: [:create]
    end
    resources :answers, only: [:destroy] do
      resources :likes, only: [:create]
    end
    resources :likes, only: [:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
