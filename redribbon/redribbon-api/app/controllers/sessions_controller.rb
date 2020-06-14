class SessionsController < ApplicationController
  # include CurrentUserConcern
  # include RememberUserConcern
  ActionController::Parameters.permit_all_parameters = true

  def create
    # require 'pry'; binding.pry
    user = User.find_by(email: params['email'])
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:isRemembered] ? remember(user) : forget(user)
      render json: {
        user: { email: user.email, first_name: user.first_name, last_name: user.last_name }
      }, status: :ok
    else
      head :unauthorized # 401
    end
  end


  # check if current user is available
  # GET /logged_in
  def logged_in
    if logged_in?
      render json: {
        user: { email: @current_user[:email], first_name: @current_user[:first_name], last_name: @current_user[:last_name] }
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

  # Log out
  # DELETE /logout
  def destroy
    log_out if logged_in?
    head :ok
  end

end
