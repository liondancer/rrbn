# Older controller

class RegistrationsController < ApplicationController
  def create
    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )
    profile = Profile.create!(
      first_name: params['user']['first_name'],
      last_name: params['user']['last_name']
    )
    if user && profile
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: {
          email: user.email,
          first_name: profile.first_name,
          last_name: profile.last_name
        }
      }
    else
      render json: { status: :unprocessable_entity }
    end
  end


end