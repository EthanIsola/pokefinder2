class FavoritesController < ApplicationController
    def create
        fav = Favorite.create(fav_params)
        user = User.find(params[:user_id])
        render json: user.favorites
    end

    def index
        user = User.find(params[:id])
        render json: user.favorites
    end

    def destroy
        fav = Favorite.find_by(name: params[:name], user_id: params[:user_id])
        fav.destroy
        user = User.find(params[:user_id])
        render json: user.favorites
    end

    private

    def fav_params
        params.permit(:name, :user_id)
    end
end
