module SessionsHelper
  # logs in the given user
  def log_in(user)
    session[:user_id] = user.id
  end

  # Returns the current logged-in user (if any)
  def current_user
    if (user_id = session[:user_id])
      @current_user ||= User.find_by(id: user_id)
    elsif (user_id = cookies.signed[:user_id]) # User has closed the browser before and persistent session exists
      user = User.find_by(id: user_id)
      if user&.authenticated?(cookies[:remember_token])
        log_in user
        @current_user
      end
    end
  end

  # Returns true if user is logged in, false otherwise.
  def logged_in?
    !current_user.nil?
  end

  # Remember a user in a persistent session.
  def remember(user)
    # Create remember digest in DB
    user.remember
    # Expires 20 years from now
    # creates signed (encrypted) user_id in persistent cookies
    cookies.permanent.signed[:user_id] = user.id
    # added remember token in persistent cookies to be used to DB's remember digest
    cookies.permanent[:remember_token] = user.remember_token
  end

  # Forgets persistent session.
  def forget(user)
    user.forget
    cookies.delete(:user_id)
    cookies.delete(:remember_token)
  end

  # Logs out the current user.
  def log_out
    forget current_user
    session.delete(:user_id)
    @current_user = nil
  end
end
