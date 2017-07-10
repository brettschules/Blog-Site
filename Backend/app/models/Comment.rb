class Comment < ApplicationRecord
  has_many :users
  has_many :blogs, through: :users
end
