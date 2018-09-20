class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|

      t.string :creator
      t.text :content
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
