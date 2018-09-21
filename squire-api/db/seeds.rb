# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.delete_all
Product.delete_all



#Product 1
Product.create(name: 'Chuck Suede Chelsea Boot', 
brand: 'New Republic', 
description: 'The boot that launched a thosand fits', 
price: '99', 
img_url: 'https://cdn.shopify.com/s/files/1/1223/5758/products/chucksnd1_1_2048x2048.jpg?v=1510267739', 
product_url:'https://www.newrepublicman.com/products/chuck-chelsea-boot?variant=1694124081176&utm_source=tbpepperjam&utm_medium=21181&utm_campaign=2-312517&clickId=2442610739')

#Product 2
Product.create(name: 'Holt Leather Biker Jacket', 
brand: 'AllSaints', 
description: 'A leather biker jacket that will never, ever go out of style', 
price: '498', 
img_url: 'https://images.allsaints.com/products/600/ML009P/5/ML009P-5-3.jpg', 
product_url:'https://www.us.allsaints.com/men/leather-jackets/allsaints-holt-biker/?colour=5&category=501&partner=awin&utm_source=awin&utm_medium=affiliate&utm_term=78888&utm_campaign=Skimlinks&source=aw&awc=7861_1537549530_e1e14eb820106ef8524ca237a30cb415')

#Product 3
Product.create(name: 'Rectangular-frame acetate sunglasses', 
brand: 'Gucci', 
description: 'Consider these throwback acetate frames just further proof that theres almost nothing Alessandro Michele cant make better, cooler, and a hell of a lot wavier.', 
price: '305', 
img_url: 'https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1509380107/504307_J0070_2211_001_100_0000_Light-Rectangular-frame-acetate-sunglasses.jpg', 
product_url:'https://www.gucci.com/us/en/pr/men/mens-accessories/mens-sunglasses/mens-sunglasses/mens-square-rectangle/rectangular-frame-acetate-sunglasses-p-504307J00702211?position=25&listName=PGUS4Cols&categoryPath=Men/Mens-Accessories/Mens-Eyewear&ranMID=37490&ranEAID=J84DHJLQkR4&ranSiteID=J84DHJLQkR4-Est2Ht9VqNrBagE46P8NPA&utm_source=J84DHJLQkR4&utm_medium=affiliates&utm_campaign=1&utm_content=10&utm_term=J84DHJLQkR4&siteID=J84DHJLQkR4-Est2Ht9VqNrBagE46P8NPA')

#Product 4
Product.create(name: 'Hartsfield” organic cotton weekender tote', 
brand: 'Want Les Essentiels.', 
description: 'A weekender so handsome, you’ll have no choice but to take more vacations.', 
price: '450', 
img_url: 'https://cdn.shopify.com/s/files/1/0029/7172/9987/products/u0sqv3q7lcglbe8veclg.jpg?v=1536618328', 
product_url: 'https://wantapothecary.com/products/hartsfield-organic-cotton-weekender-tote-1')

#Product 5
Product.create(name: 'Serendipity nude cuff', 
brand: 'Maria Black', 
description: 'A bracelet subtle enough to rock with your new small watch.', 
price: '250', 
img_url: 'https://cdn-images.farfetch-contents.com/12/98/14/55/12981455_13734744_480.jpg', 
product_url:'https://www.farfetch.com/shopping/men/maria-black-serendipity-nude-cuff-item-12981455.aspx?storeid=9449&from=listing&clickref=1101l5EhtTpd&utm_source=condenast&utm_medium=affiliate&utm_campaign=PHUS&utm_term=USNetwork&pid=performancehorizon_int&c=condenast&clickid=1101l5EhtTpd&af_siteid=1100l20065&af_sub_siteid=1011l274&af_cost_model=CPA&af_channel=affiliate&is_retargeting=true')


#Comments for Product 1
Comment.create(creator: 'Santiago Valencia', content: 'Shoe sizes are completely off, I always buy size 10 but I had to return the shoes as they were too large. Pictures on the web site are not accurate for the products. I then returned the shoes and was never credited back on my card.', product_id: 1)
