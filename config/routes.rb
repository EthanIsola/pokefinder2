Rails.application.routes.draw do
  delete "/logout", to: "session#destroy"
  delete "/favs", to: "favorites#destroy"
  post "/login", to: "session#create"
  post "/signup", to: "users#create"
  post "/favorite", to: "favorites#create"
  get "/favorite", to: "users#show_favs"
  get "/favs", to: "favorites#index"
  get "/me", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
