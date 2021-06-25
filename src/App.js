import React, { Component } from 'react';
import BuyChairs from './components/BuyChairs';
import EditChairs from './components/EditChairs';
import Navbar from './components/Navbar';
import { CHAIRS } from './shared/data';

const BUY_CHAIRS_PAGE = "buy-chairs";
const EDIT_CHAIRS_PAGE = "edit-chairs";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLocation: BUY_CHAIRS_PAGE,
			chairs: CHAIRS,
			cart: []
		}
	}

	handleNavigate = (location) => {
		this.setState({ currentLocation: location });
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

	handleAddChair = (chair) => {
		const chairs = [...this.state.chairs];
		chairs.push(chair);
		this.setState({ chairs: chairs });
	}

	handleRemoveChair = (id) => {
		const chairs = this.state.chairs.filter(chair => chair.id !== id);
		const cart = this.state.cart.filter(i => i.id !== id);
		this.setState({ chairs: chairs, cart: cart });
	}

	render() {
		const links = [
			{ title: "Buy Chairs", location: BUY_CHAIRS_PAGE },
			{ title: "Edit Chairs", location: EDIT_CHAIRS_PAGE }
		]

		return (
			<div>
				<Navbar 
					title="Chairs" 
					links={links} 
					currentLocation={this.state.currentLocation}
					onNavigate={this.handleNavigate} />
				{ (this.state.currentLocation === BUY_CHAIRS_PAGE) ? 
					<BuyChairs
						cart={this.state.cart}
						chairs={this.state.chairs}
						onAddToCart={this.handleAddToCart}
						onRemoveFromCart={this.handleRemoveFromCart} />
				: "" }
				{ (this.state.currentLocation === EDIT_CHAIRS_PAGE) ? 
					<EditChairs
						chairs={this.state.chairs}
						onRemoveChair={this.handleRemoveChair }
						onAddChair={this.handleAddChair} />
				: "" }
			</div>
		);
	}
  
}
