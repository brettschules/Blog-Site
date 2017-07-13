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

        blog = Blog.new(blog_params)

        if blog.save
          render json: {message: "Created Blog!", status: 200}
        else
          render json: {message: blog.errors.full_message, status: 500}
        end
      end


private

      def blog_params
        params.require(:blog).permit(:title, :content, :user_id)
      end
    end
  end
end
