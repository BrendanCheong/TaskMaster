class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :status, :endDate, :user_id, :created_at, :updated_at
  attributes :tags do |object|
    object.tags.as_json
  end
  belongs_to :user
  has_many :tags
end
