class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|

      t.string :name
      t.string :brand
      t.string :description
      t.decimal :price, precision: 7, scale: 2, default: 0
      t.text :img_url
      t.text :product_url

      t.timestamps
    end
  end
end
