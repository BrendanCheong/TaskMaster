class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :status, :endDate, :user_id
  belongs_to :user
  has_many :tags
end
