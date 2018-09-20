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
