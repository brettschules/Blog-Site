class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name


  has_many :comments
  has_many :blogs
end
