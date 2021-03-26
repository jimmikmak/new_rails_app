# frozen_string_literal: true

class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: 201
    else
      render json: { message: 'Unable to create user!' }, status: 500
    end
  end

  # Todo.create(title: "James", completed: false, description:)

  def show
    puts params[:id]
    render json: User.find(params[:id])
  end

  #   def update
  #     todo = Todo.find(params[:id])
  #     todo.update(completed: params[:completed], description: params[:description], title: params[:title])
  #     render json: { type: 'Successfully updated entry!' }
  #   end

  def update
    render json: User.find(params[:id]).update(user_params)
  end

  def destroy
    User.destroy(params[:id])
    render json: { message: 'USER HAS BEEN DELETED!!' }
  end

  def user_params
    params.required(:user).permit(:name, :password)
  end
end
