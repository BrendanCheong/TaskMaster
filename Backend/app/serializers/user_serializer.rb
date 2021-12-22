class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password
  has_many :tasks
  has_many :tags, through: :tasks
end
