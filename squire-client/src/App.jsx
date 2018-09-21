import React, { Component } from 'react';
import Header from './components/Header';
import ProductIndex from './components/ProductIndex';
import ProductDetails from './components/ProductDetails';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';

import './App.css';
import {
  getProducts, 
  getOneProduct, 
  saveProduct,
  updateProduct,
  deleteProduct}from './services/api';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Product Index',
      selectedProduct: '',
      products: [],
      comments: [],
      productDetails: {},
      
    }
    this.selectProduct = this.selectProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.getAProduct = this.getAProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

//All products will list when page is loaded
  componentDidMount() {
    this.fetchAllProducts()
  }

//FETCHES ALL PRODUCTS
fetchAllProducts() {
  getProducts()
    .then(data => {
      this.setState({
      products: [],
      })
    })
}


//SELECTED PRODUCT GETS UPDATED
  selectProduct(product) {
    this.setState({
      selectedProduct: product,
      currentView: 'Edit Product'
    });
  }

//CREATE A PRODUCT
  createProduct(product) {
    saveProduct(product)
    .then(data => getProducts())
    .then(data => {
      this.setState ({
        currentView: 'Product Index',
        products: data.products
      });
    });
  }

//GET ONE PRODUCT
getAProduct(product) {
  getOneProduct(product.id)
    .then(data => {
      this.setState({
        selectedProduct: data.product,
        currentView: 'Product Detail'
      });
    })
}

//UPDATE A PRODUCT
updateProduct(product) {
  updateProduct(product)
    .then(data => getOneProduct())
    .then(data => {
      this.setState({
        currentView: 'Edit Product',
        product: data.product,
        selectedProduct: data.product
      });
    })
}

//  // Updates the products and rerenders the index and details
//  updateProduct(product) {
//   updateProduct(product)
//     .then(data => {
//       this.setState({
//         productDetails: [data]
//       })
//       this.fetchAllProducts()
//         .then(data => this.setState({ 
//           product: data 
//         }));
//     });
// }


  //DELETE PRODUCT
 // Deletes a product and rerenders the index
 deleteProduct(product_id) {
  deleteProduct(product_id)
    .then(data => {
      getProducts()
        .then(data => 
          this.setState({
          products: data.products,
          comments: [],
          productDetails: {},
          currentView: 'Product Index'
        }));
    });
}


  determineWhichToRender() {
    const { currentView } = this.state;
    const { products, selectedProduct, selectProduct } = this.state;

    switch (currentView) {
      case 'Product Index':
        return <ProductIndex
         products={this.state.products}
         detail = {this.getAProduct}
         onSubmit = {this.fetchAllProducts}
         view={this.fetchAllComments}
         />;
        break;
        case 'Create Product':
        return <CreateProduct 
        onSubmit={this.createProduct}
        />;
        break;
        case 'Edit Product':
        const product = products.find(product => product.id === selectedProduct.product_id);
        return <EditProduct
        onSubmit={this.updateProduct}
        product = {product}
        product={this.state.selectedProduct}
         />;
         break;
         case 'Product Detail':
         return <ProductDetails
         onClick={this.selectProduct}
         product={this.state.selectedProduct}
         edit= {this.getAProduct}
         delete ={this.deleteProduct}
         />;

    }
  }

  handleLinkClick(link) {
    this.setState({currentView: link});
  }


  render() {
    const links = [
      'Product Index',
      'Edit Product',
      'Create Product',
    ];


    return (
      <div>
     <Header 
     onClick ={this.handleLinkClick.bind(this)} 
     links={links}/>
     {this.determineWhichToRender()}
     <Footer />
      </div>
    );
  }
}

export default App;
