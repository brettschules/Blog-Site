class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :created_at

  belongs_to :user
end
