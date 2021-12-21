class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :tagName
      t.belongs_to :task, null: false, foreign_key: true
      t.timestamps
    end
  end
end
