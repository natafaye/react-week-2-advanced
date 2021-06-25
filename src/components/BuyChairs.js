import React, { Component } from 'react'
import Cart from './Cart'
import ChairList from './ChairList'

export default class BuyChairs extends Component {

    render() {
        return (
            <div className="container">
                <ChairList 
                    chairs={this.props.chairs} 
                    buttonText="Add to Cart"
                    buttonClass="btn-success"
                    onButtonClick={this.props.onAddToCart}
                    showButton />
                <Cart cart={this.props.cart} onRemoveFromCart={this.props.onRemoveFromCart} />
            </div>
        )
    }
}