class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :img_url

  belongs_to :user
end
