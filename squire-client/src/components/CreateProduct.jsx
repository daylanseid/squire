import React, { Component } from 'react';

class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: '',
            content: '',
            img_url: '',
            product_url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            brand: '',
            description: '',
            price: '',
            img_url: '',
            product_url: ''
        })
    }

    //changes state based on user input
    handleChange(ev) {
        const { name, value } = ev.target;
        this.setState({
            [name]: value
        });
    }

    //renders a styled form for user to input their information
    render() {
        return (
            <div className="create-product">
                <h2>Create Product</h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-25">
                            <label> Name </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                                placeholder="Name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label> Brand </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="brand"
                                onChange={this.handleChange}
                                value={this.state.brand}
                                placeholder="Brand" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label> Description </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="description"
                                onChange={this.handleChange}
                                value={this.state.genre}
                                placeholder="Description" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label> Price </label>
                        </div>
                        <div className="col-75">
                            <textarea
                                type="text"
                                name="price"
                                onChange={this.handleChange}
                                value={this.state.price}
                                placeholder="Price"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label> Product Link </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="product_url"
                                onChange={this.handleChange}
                                value={this.state.product_url}
                                placeholder="Link to Product" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label> Image Link </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="img_url"
                                onChange={this.handleChange}
                                value={this.state.img_url}
                                placeholder="Link to Product Image" />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Create Product" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProduct;