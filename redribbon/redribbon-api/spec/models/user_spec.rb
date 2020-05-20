require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Users tests' do
    it 'should be valid' do
      @user = User.new(email: 'tester@gmail.com', password: 'foobar', password_confirmation: 'foobar')
      expect(@user.valid?).to be_truthy
    end

    it 'should have a password of minimum length' do
      @user = User.new(email: 'tester@gmail.com', password: 'abc', password_confirmation: 'abc')
      expect(@user.valid?).to be_falsey
    end

    it 'should return false for authenticated? for a user with nil digest' do
      @user = User.new(email: 'tester@gmail.com', password: 'abcabc', password_confirmation: 'abcabc')

      expect(@user.authenticated?('')).to be false
    end
    
  end
end
