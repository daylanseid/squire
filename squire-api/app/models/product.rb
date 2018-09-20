class Product < ApplicationRecord
    has_many :comments, dependent: :nullify #if products have comments & it is deleted, comments will be deleted too

    validates :brand, presence: true, uniqueness: true

    validates :name, :description, :price, :img_url, :product_url,  presence: true
end
