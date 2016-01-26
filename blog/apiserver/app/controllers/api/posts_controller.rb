class API::PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :destroy]

  def index
    @posts = Post.where(key: post_params[:key]).last(10).reverse
  end

  def show
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render :show, status: :ok
  end

  private
  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.permit(:title, :categories, :content, :key)
  end
end
