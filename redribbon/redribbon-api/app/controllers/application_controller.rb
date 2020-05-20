class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # SKIPS CSRF

  include SessionsHelper
end
