import React from 'react';

function ProductIndex(props) {
    return (
        <div className="productindex">
            {props.products.map(product => {
                return (
                    <div className="product-index" key={product.id}>
                        <img src={product.img_url} alt="Product Image" />
                        <br />
                        <br />
                        <h1 className="product-name">{product.name}</h1>
                        <br />
                        <h3 className="product-brand">By: {product.brand}</h3>
                        <br />
                        <button className="myButton"
                            onClick={(ev) => {
                                 ev.preventDefault();
                                props.detail(product)
                            }} >
                            View Product Detail
                        </button>
                        <br />
                        <br />
                    </div>
                );
            })}
        </div>
    );
}

export default ProductIndex;