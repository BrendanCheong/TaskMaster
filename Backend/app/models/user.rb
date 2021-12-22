class User < ApplicationRecord
    has_many :tasks, dependent: :destroy
    has_many :tags, through: :tasks, dependent: :destroy
end
