module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:user_id]
      @current_user ||= User.find_by(session[:user_id])
    elsif cookies.signed[:user_id]
      user = User.find_by(id: cookies.signed[:user_id])
      @current_user = user if user&.authenticated?(cookies[:remember_token])
    end
  end

end