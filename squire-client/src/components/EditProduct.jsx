import React, { Component } from 'react';


 class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      brand: this.props.product.brand,
      description: this.props.product.description,
      price: this.props.product.price,
      img_url: this.props.product.img_url,
      product_url: this.props.product.product_url,
      id: this.props.product.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
   componentDidUpdate(prevProps) {
  // Checks if the props changed and if so resets the state
    if (this.props.product.id !== prevProps.product.id) {
      this.setState({
      namee: this.props.product.name,
      brand: this.props.product.brand,
      description: this.props.product.description,
      price: this.props.product.price,
      img_url: this.props.product.img_url,
      product_url: this.props.product.product_url,
      id: this.props.product.id
      })
    }
  }


// Changes state based on user input into form
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }


// Handles when edit form is submitted and resets form
 handleSubmit(evt) {
    evt.preventDefault();
    const data = {
        name: this.props.product.name,
        brand: this.props.product.brand,
        description: this.props.product.description,
        price: this.props.product.price,
        img_url: this.props.product.img_url,
        product_url: this.props.product.product_url,
        id: this.props.product.id
    }
    this.props.onSubmit(data);
  }


 render() {
    return (
      <div className="edit-product">
              <h2>Edit Product</h2>     
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                  <br />
                  <label>Brand:</label>
                  <input
                    type="text"
                    name="brand"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Brand"
                  />
                  <br />
                  <label>Description:</label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.creator}
                    onChange={this.handleChange}
                    placeholder="Description"
                  />
                  <br />
                  <label>Price:</label>
                  <input
                    type="text"
                    name="Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    placeholder="Price"
                  />
                  <br />
                  <label>Img Url:</label>
                  <input
                    type="text"
                    name="img_url"
                    value={this.state.img_url}
                    onChange={this.handleChange}
                    placeholder="Img Url"
                  />
                  <br />
                  <label>Product Link:</label>
                  <input
                    type="text"
                    name="product_url"
                    value={this.state.product_url}
                    onChange={this.handleChange}
                    placeholder="Product Link"
                  />
                  <br />
                  <br />
                  <br />
                  <input type="submit" value="Edit Product" />
                </form>
              </div>       
      </div >
    );
}
}
 export default EditProduct; 