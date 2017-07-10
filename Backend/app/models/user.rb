class User < ApplicationRecord
  belongs_to :blog
  belongs_to :comment

  has_secure_password
end
