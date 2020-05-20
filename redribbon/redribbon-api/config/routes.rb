Rails.application.routes.draw do
  resources :registrations, only: [:create]
  resources :users
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  # delete 'logout', to: 'sessions#logout'
  get 'logged_in', to: 'sessions#logged_in'

end
