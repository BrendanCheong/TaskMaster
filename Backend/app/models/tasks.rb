class Tasks < ApplicationRecord
  belongs_to :users
  has_many :tags
end
