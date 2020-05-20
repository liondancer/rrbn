require 'rails_helper'
require 'json'


RSpec.describe 'UsersLogins', type: :request do
  describe 'POST /login' do
    it 'login with invalid information' do
      post '/login', params: { session: { user: { email: '', password: '' } } }
      # expect(response.content_type).to eq('application/json; charset=utf-8')
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'POST /login' do
    fixtures :users

    it 'login with valid information followed by logout' do
      user = users(:bradford)
      post '/login', params: { session: { user: { email: user.email,
                                                  password: 'asdasd' } } }
      expect(response).to have_http_status(:ok)
      expect(is_logged_in?).to be true
      delete logout_path
      expect(is_logged_in?).to be false
    end

    it 'login with remembering' do
      user = users(:bradford)
      post '/login', params: { session: { user: { email: user.email,
                                                  password: 'asdasd',
                                                  isRemembered: true } } }
      expect(response).to have_http_status(:ok)
      expect(is_logged_in?).to be true
      puts cookies.inspect
      expect(cookies['isRemembered']).should_not be_nil
      # p cookies[:isRemembered]
    end

  end

end
