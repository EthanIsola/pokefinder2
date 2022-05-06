class UsersController < ApplicationController
    def create
        if (params[:password] != nil)
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Password can't be blank"] }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def show_favs
        user = User.find(session[:user_id])
        render json: user.favorites
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
