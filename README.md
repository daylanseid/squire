# squire

A user will be able to recommend items for others to buy. They will be able to add a product, edit it, and delete it from the collection. 

## Motivation
I originally wanted to create an eCommerce site to sell products for men. I decided it would be better for users to be able to recommend the products they like and use. Users would also be able to add comments and reviews about each product listed. 

## General Approach
For the front-end, I used React and Ruby for the back-end. 

## User Stories
1. As a user I want to see a collection of men's products
1. As a user I want to add a product to the collection
1. As a user I want to see the product details
1. As a user I want to edit the product details
1. As a user I want to delete a product from the collection
1. As a user I want to review a product
1. As a user I want to see the product's origin page to purchase the item

## MVP
Full CRUD functionality for the collection of Products.

## Code Example
```RUBY

class ProductsController < ApplicationController
#GET /products
def index
    #render json: {message: 'I show all products'}
    render json: {products: Product.all}, include: :comments
  end
  
  #GET /products/:id
  def show
  #render json: {message: 'I show one product'}
  @product = Product.find(params[:id])
  render json: { product: @product }, include: :comments
  end
  
  #POST /products
  def create
  #render json: { message: 'I create a product'}
  @new_product = Product.new(product_params)
  if @new_product.save
  render json: { product: @new_product } #, include: :comments
  else
  render json: { message: 'Some feilds are invalid', errors: @new_product.errors}, status: :bad_request 
  end
  end
  
  #PUT /products/:id
  def update
  #render json: { message: 'I update a product'}
  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render json: @product.to_json(include: :comments)
    else
      render json: { message: 'Some feilds are invalid', errors: @product.errors}, status: :bad_request 
    end
  end
  end
  
  #DELETE /products/:id
  def destroy
  #render json: { message: 'I delete a product'}
  @product = Product.find(params[:id])
  @product.destroy
  render json: { message: "Product #{params[:id]} deleted"}
  end
  
  
  private
  # We'll set up to accept request bodies in JSON API format (see: https://stackoverflow.com/questions/31594567/strong-parameters-json-api-rails)
  def product_params
  params
  .require(:data)
  .require(:attributes)
  .permit(
  :name,
  :brand,
  :description,
  :price,
  :image_url,
  :product_url
  )
  end
end
```

## ERD
![Wireframe](/ERD/ERD.png)

## Wireframes
![Wireframe](/wireframes/Edit.png)
![Wireframe](/wireframes/Homepage.png)
![Wireframe](/wireframes/ProductDetails.png)

## Appshots
![Wireframe](/appshots/AppShot1.png)
![Wireframe](/appshots/AppShot2.png)
![Wireframe](/appshots/AppShot3.png)



## Created with
* Balsamiq
* Lucidchart
* Visual Studio Code
* React
* React-dom
* React-scripts
* Nodemon
* Ruby
* Rails
* Cors
* Bulma
* CSS-Grid



 

## Unresolved Issues:
1. Getting Create and Update to work for products and comments.


## Things to be added later:
1. User Authentication
1. Add, Edit and delete reviews
1. User's wishlist



## Credits

### CSS 
* Bulma

### Idea for Squire
* https://www.gq.com/recommends#everything

### Design of the wireframes
* https://balsamiq.cloud/



## ICE-Box
1. Full Crud
1. User/Authentication
1. Wishlist



## License

GA © Daylan Seid
