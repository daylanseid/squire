class CommentsController < ApplicationController

    def index
        if (params[:product_id])
          @comments = Product.find(params[:product_id]).comments
        else
          @comments = Comment.all
        end
        render json: { comments: @comments}
      end
  
      def show
        @comment = Comment.find(params[:id])
        render json: { comment: @comment}, include: :product
      end
  
      def create
        if (params[:product_id])
          @comment = Product.find(params[:product_id]).comments.new(comment_params)
        else
          @comment = Comment.new(comment_params)
        end
        if @comment.save
          render json: { comment: @comment }
        else
          render json: { message: 'Some fields are invalid', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
          render json: { comment: @comment}
        else
          render json: { message: 'Some fields are invalid', errors: @comment.errors }, status: :bad_request
        end
      end
  
      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: { message: "Destroyed comment #{params[:id]}"}
      end
  
      private
      
      def comment_params
        params
          .require(:data)
          .require(:attributes)
          .permit(
            :name,
            :description,
            :product_id
          )
end
