import React from 'react';


export default  (props) => {
console.log(props)
    return (
      <div className="product-details" >
        <img className="detail-img"src={props.product.img_url} alt="Img Poster" />
        <br />
        <h4><span className="detail-name">{props.product.name}</span></h4>
        <br />
        <h4 className="detail-names">Brand: <span className="detail">{props.product.brand}</span></h4>
        <h4 className="detail-names">Description: <span className="detail">{props.product.description}</span></h4>
        <br />
        <h4> <span>{props.product.price}</span></h4>
        {/* <h4>Comments: {props.product.comment}</h4>  */}
        <br />
        <br />
        {/* <button className ='edit-button' onClick={(e) => props.edit(props.product.id)}>Edit Product</button> */}
        <button className ='delete-button' onClick={(e) => props.delete(props.product.id)}>Delete</button>
        <br />
        <br />
        {props.product.product_url ? 
        <a href={props.product.product_url}>BUY ITEM</a>
        : null}
      </div>)
}