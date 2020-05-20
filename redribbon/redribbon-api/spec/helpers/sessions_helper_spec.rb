require 'rails_helper'

RSpec.describe SessionsHelper, type: :helper do
  describe 'POST /login to ' do
    fixtures :users

    it 'tests current_user returns right user when session is nil' do
      user = users(:bradford)
      remember(user)
      expect(current_user).to eq user
    end

    it 'current_user returns nil when remember digest is wrong' do
      user = users(:bradford)
      user.update_attribute(:remember_digest, User.digest(User.new_token))
      expect(current_user).to be_nil
      expect(is_logged_in?).to be false
    end
  end
end