require 'rails_helper'

RSpec.describe 'UsersEdits', type: :request do
  describe 'User Edits' do
    fixtures :users

    it 'PATCH /user unsuccessful edits' do
      user = users(:bradford)
      patch user_path(user), user: { email: 'testemail123@gmail.com',
                                     password: 'foo',
                                     password_confirmation: 'foofoo' }
    end

    it 'PATCH /user successful edits' do
      user = users(:bradford)

      patch user_path(user), user: { email: 'testemail12@gmail.com',
                                     password: '',
                                     password_confirmation: '' }
      user.reload
      expect(user.email).to eq 'testemail12@gmail.com'
    end
  end
end
