import './App.css';
import Navbar from './components/Navbar';
import { BUY_CHAIRS_PAGE, EDIT_CHAIRS_PAGE } from './shared/constants';
import { CHAIRS } from './shared/data';
import BuyChairs from './components/BuyChairs';
import EditChairs from './components/EditChairs';
import React, { Component } from 'react'

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentLocation: BUY_CHAIRS_PAGE,
			chairs: CHAIRS,
			cart: []
		}
	}

	handleNavigate = (newLocation) => {
		this.setState({ currentLocation: newLocation });
	}

	handleAddToCart = (id) => {
		let item = this.state.cart.find(i => i.id === id);
		let cart = [];
		if(!item) {
			const chair = this.state.chairs.find(c => c.id === id);
			item = { id, text: chair.title, number: 1 };
			cart = this.state.cart.concat([ item ]);
		}
		else {
			const itemIndex = this.state.cart.indexOf(item);
			cart = [ ...this.state.cart ];
			cart[itemIndex] = { ...item, number: item.number + 1};
		}
		this.setState({ cart });
	}

    handleRemoveFromCart = (id) => {
		const item = this.state.cart.find(i => i.id === id);
		let cart = [];
		if(item.number === 1) {
			cart = this.state.cart.filter(i => i.id !== id);
		}
		else {
			const itemIndex = this.state.cart.indexOf(item);
			cart = [ ...this.state.cart ];
			cart[itemIndex] = { ...item, number: item.number - 1};
		}
		this.setState({ cart });
    }

	handleRemoveChair = (id) => {
		const chairs = this.state.chairs.filter(c => c.id !== id);
		const cart = this.state.cart.filter(i => i.id !== id);
		this.setState({ chairs, cart });
	}

	render() {
		const links = [
			{ title: "Buy Chairs", location: BUY_CHAIRS_PAGE },
			{ title: "Edit Chairs", location: EDIT_CHAIRS_PAGE }
		]
		return (
			<div>
				<Navbar onNavigate={this.handleNavigate} links={links} currentLocation={this.state.currentLocation}/>
				{ (this.state.currentLocation === BUY_CHAIRS_PAGE) ? 
					<BuyChairs 
						chairs={this.state.chairs} 
						cart={this.state.cart} 
						onAddToCart={this.handleAddToCart}
						onRemoveFromCart={this.handleRemoveFromCart} /> 
				: "" }
				{ (this.state.currentLocation === EDIT_CHAIRS_PAGE) ? 
					<EditChairs 
						chairs={this.state.chairs}
						onRemoveChair={this.handleRemoveChair} /> 
				: "" }
			</div>
		);
	}
}
