class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in @user
      render json: { user: { email: @user.email } },
             status: :created
    elsif @user.errors.any?
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    else
      head :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(email: params[:session][:user][:email])
    if @user.update_attributes(user_params)
      # Handle successful update
    else
    end
  end

  private

  def user_params
    params.require(:user).permit(:email,
                                 :password,
                                 :password_confirmation)
  end
end
