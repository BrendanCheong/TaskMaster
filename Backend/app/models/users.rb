class Users < ApplicationRecord
    has_many :tasks
    has_many :tags, through: :tasks
end
