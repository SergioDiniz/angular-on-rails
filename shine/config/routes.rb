Rails.application.routes.draw do

  # get 'angular_test/index'
  get 'angular_test', to: 'angular_test#index'

  devise_for :users
  resources :customers, only: [:index]
  root 'dashboard#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
