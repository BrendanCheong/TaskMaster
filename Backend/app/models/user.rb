class User < ApplicationRecord
    has_secure_password

    validates :email, format: { 
        with: /\A(\S+)@(.+)\.(\S+)\z/, 
        message: "only valid emails allowed"
    }, uniqueness: true

    has_many :tasks, dependent: :destroy
    has_many :tags, through: :tasks, dependent: :destroy
end
