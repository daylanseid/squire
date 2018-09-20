# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.delete_all
Product.delete_all



#Product
Product.create(name: 'Chuck Suede Chelsea Boot', brand: 'New Republic', description: 'The boot that launched a thosand fits', price:'$99', img_url: 'https://cdn.shopify.com/s/files/1/1223/5758/products/chucksnd1_1_2048x2048.jpg?v=1510267739', product_url:'https://www.newrepublicman.com/products/chuck-chelsea-boot?variant=1694124081176&utm_source=tbpepperjam&utm_medium=21181&utm_campaign=2-312517&clickId=2442610739')

#Comments for Product 1
Comment.create(creator: 'Santiago Valencia', content: 'Shoe sizes are completely off, I always buy size 10 but I had to return the shoes as they were too large. Pictures on the web site are not accurate for the products. I then returned the shoes and was never credited back on my card.', product_id: 1)
