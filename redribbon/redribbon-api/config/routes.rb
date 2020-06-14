Rails.application.routes.draw do
  resources :properties
  # resources :registrations, only: [:create]
  resources :users
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'logged_in', to: 'sessions#logged_in'

end
