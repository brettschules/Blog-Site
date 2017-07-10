class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :date

  belongs_to :user
end
