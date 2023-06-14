Rails.application.routes.draw do
  root to:'static_pages#home'

  get '/:username'                 => 'static_pages#userpage'
  get '/login'                     => 'static_pages#login'

  namespace :api do
    # USERS
    post '/users'                  => 'users#create'

    # SESSIONS
    post '/sessions'               => 'sessions#create'
    get  '/authenticated'          => 'sessions#authenticated'
    delete '/sessions'             => 'sessions#destroy'

    # TWEETS
    post '/tweets'                 => 'tweets#create'
    get  '/tweets'                 => 'tweets#index'
    delete '/tweets/:id'           => 'tweets#destroy'
    get  '/users/:username/tweets' => 'tweets#index_by_user'
   
  end
 
  # if you are using active storage to upload and store images, comment the above line
end
