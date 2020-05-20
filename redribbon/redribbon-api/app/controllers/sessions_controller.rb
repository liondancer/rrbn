class SessionsController < ApplicationController
  # include CurrentUserConcern
  # include RememberUserConcern

  def create
    user = User.find_by(email: params[:session][:user][:email])
               .try(:authenticate, params[:session][:user][:password])
    if user
      log_in user
      params[:session][:isRemembered] ? remember(user) : forget(user)
      render json: {
        user: { email: user.email }
      }, status: :ok
    else
      head :unauthorized # 401
    end
  end

  # check if current user is available
  def logged_in
    if logged_in?
      render json: {
        user: { email: @current_user[:email] }
      }, status: :ok
    else
      head :ok
    end
  end

  # def logout
  #   forget(@current_user) unless @current_user.nil?
  #   reset_session
  #   render json: { status: 200, logged_out: true }
  # end

  def destroy
    log_out if logged_in?
    head :ok
  end

end
