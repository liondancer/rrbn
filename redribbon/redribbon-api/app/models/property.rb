class Property < ApplicationRecord
  validates :description, length: {maximum: 1000}
  belongs_to :user
end
