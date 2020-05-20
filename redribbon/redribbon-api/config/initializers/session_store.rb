if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_session_cookie", domain: "redribbon-api.com"
else
  Rails.application.config.session_store :cookie_store, key: "_session_cookie"
end
