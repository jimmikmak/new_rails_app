# frozen_string_literal: true

class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  #   def create
  #     # puts params[:title]
  #     # puts params[:completed]
  #     # puts params[:description]
  #     todo = Todo.create(title: params[:title], completed: params[:completed], description: params[:description])
  #     todo_valid = todo.valid?
  #     if todo_valid
  #       render json: { message: 'Successfully created todo list!' }, status: 200
  #     else
  #       render json: { message: 'Unable to create todo list' }, status: 400
  #     end
  #   end

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

  def destroy
    User.destroy(params[:id])
    render json: { message: 'USER HAS BEEN DELETED!!' }
  end

  def user_params
    params.required(:user).permit(:name, :password)
  end
end
