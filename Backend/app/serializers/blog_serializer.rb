class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :img_url, :date
end
