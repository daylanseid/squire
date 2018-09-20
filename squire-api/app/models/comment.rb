class Comment < ApplicationRecord
    belongs_to :product, optional: true

    validates :creator, presence: true
end
