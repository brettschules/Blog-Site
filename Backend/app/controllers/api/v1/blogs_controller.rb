module Api
  module V1
class BlogsController < ApplicationController
  def index
    
    render json: Blog.all
  end

  def show
    render json: Blog.find(params[:id])
  end

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end
end
end
end
