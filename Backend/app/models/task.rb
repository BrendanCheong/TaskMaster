class Task < ApplicationRecord
  validates :endDate, comparison: { greater_than_or_equal_to: DateTime.now(), message: "Your task cannot end in the past!" }

  belongs_to :user
  has_many :tags, dependent: :destroy
end
