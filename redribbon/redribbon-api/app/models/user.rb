class User < ApplicationRecord
  attr_accessor :remember_token
  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  has_secure_password
  validates :password, length: { minimum: 6 }
  has_one :profile

  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # Returns a random token
  def self.new_token
    SecureRandom.urlsafe_base64
  end

  # Remembers a user in the database for use in persistent sessions
  def remember
    # create a remember token
    self.remember_token = User.new_token
    # create a remember_digest. Set to nil when logged out
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  # Forgets a user
  def forget
    update_attribute(:remember_digest, nil)
  end

  # Returns true if the given token matches the digest
  def authenticated?(remember_token)
    return false if remember_digest.nil?

    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end
end
