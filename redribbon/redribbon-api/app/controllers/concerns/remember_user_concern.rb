module RememberUserConcern
  extend ActiveSupport::Concern

  # Remembers a user in a persistent session
  def remember(user)
    user.remember # call remember method from User model class
    # places these two cookies on the browser
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_token
  end

  # Forgets a persistent session
  def forget(user)
    user.forget
    cookies.delete(:user_id)
    cookies.delete(:remember_token)
  end
end