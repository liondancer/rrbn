class UsersController < ApplicationController

  # POST /users
  # Create User
  def create
    user = User.new(user_params)
    if user.save
      log_in user
      render json: { user: { email: user.email, first_name: user.first_name, last_name: user.last_name } },
             status: :created
    elsif user.errors.any?
      render json: { errors: user.errors.full_messages },
             status: :unprocessable_entity
    else
      head :unprocessable_entity
    end
  end

  # Edit User
  def edit
    user = User.find(params[:id])
    if user.update(user_params)
      # Handle successful update
    else
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email,
                                 :password)
  end
end
