const BASE_URL = process.env.REACT_APP_API_URL


//GET ALL PRODUCTS
function getProducts() {
    return fetch(BASE_URL + '/products')
    .then(resp => resp.json())
      .catch(err => {
        //throw Error(err);
      });
}


//GET ALL COMMENTS based on product id
function getComments(id) {
    return fetch(BASE_URL + `/products/${id}/comments`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
      });
}


//SHOW A PRODUCT
function getOneProduct(id) {
    return fetch(BASE_URL + `/products/${id}`)   
    .then(resp => resp.json())
    .catch(err => {
      throw Error(err);
    });
  };



//CREATE A PRODUCT
//Data comes in as nested information under data and attributes. Must also use spread
function saveProduct(product) {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ "data": { "attributes": { ...product } } }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/products`, opts)
      .then(resp => resp.json());
  };

//CREATE A COMMENT
 function saveComment(comment,product_id) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(BASE_URL + `/products/${comment.product_id}/comments`, opts)
      .then(resp => resp.json());
  };


//UPDATE/EDIT A PRODUCT
function updateProduct(product) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify({ "data": { "attributes": { ...product } } }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(BASE_URL + `/products/${product.id}`, opts)
      .then(resp => resp.json());
  };

//UPDATE/EDIT A COMMENT


//DELETE A PRODUCT
 function deleteProduct(product_id) {
    const opts ={
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch(`${BASE_URL}/products/${product_id}`, opts)
    .then(resp => "deleted")
    .catch(err => {
      throw Error(err);
    })
  };


//DELETE A COMMENT



export {
    getProducts,
    getComments,
    getOneProduct,
    saveProduct,
    updateProduct,
    saveComment,
    deleteProduct
};