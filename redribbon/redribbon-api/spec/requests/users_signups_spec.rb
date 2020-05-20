require 'rails_helper'
require 'spec_helper'

RSpec.describe 'UsersSignups', type: :request do
  describe 'POST /users' do
    it 'should have the same User count for INVALID signup information' do
      before_count = User.count
      post users_path, params: { user: { email: '', 
                                         password: 'asdf',
                                         password_confirmation: 'asdf' } }
      after_count = User.count
      expect(before_count).to eq(after_count)
    end

    it 'should have ONE more User count for VALID signup information' do
      before_count = User.count
      post users_path, params: { user: { email: 'testuser@gmail.com',
                                         password: 'asdasd',
                                         password_confirmation: 'asdasd' } }
      after_count = User.count
      expect(after_count - before_count).to eq(1)
      expect(is_logged_in?).to be true
    end
  end
end
