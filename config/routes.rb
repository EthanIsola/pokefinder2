Rails.application.routes.draw do
  delete "/logout", to: "session#destroy"
  post "/login", to: "session#create"
  post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
