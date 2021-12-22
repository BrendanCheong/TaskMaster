class TagSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tagName, :task_id
  belongs_to :task
end
