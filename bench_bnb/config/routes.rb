Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resources :benches, only: [:index, :create]
    resource :session, only: [:create, :new, :destroy]
  end

end
