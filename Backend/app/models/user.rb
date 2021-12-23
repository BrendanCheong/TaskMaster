class User < ApplicationRecord
    validates :email, format: { with: (^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$), message: "only valid emails allowed"}, uniqueness: true

    has_many :tasks, dependent: :destroy
    has_many :tags, through: :tasks, dependent: :destroy
end
