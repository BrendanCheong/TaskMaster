class Task < ApplicationRecord
  validates_comparison_of :endDate, greater_than: -> { DateTime.now() }, presence: { message: "Your task cannot end in the past!" }

  belongs_to :user
  has_many :tags, dependent: :destroy
end
