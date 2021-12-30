class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password
  attributes :tasks do |object|
    object.tasks.as_json
  end
  attributes :tags do |object|
    object.tags.as_json
  end
  has_many :tasks
  has_many :tags, through: :tasks
end
