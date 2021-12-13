import styled from 'styled-components';

import CartItem from '../CartItem/CartItem';

//Types
import { CartItemType } from '../App';

// Styles
const Wrapper = styled.aside`
	font-family: Arial, Helvetica, sans-serif;
	width: 500px;
	padding: 20px;
`;



type Props = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};


const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
	// const calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
	
	const calculateTotal = (items: CartItemType[]) => {
		return (
			<h2>
				Total: ${items.reduce((ack: number, item) => ack + item.amount * item.price, 0)}
			</h2>
		);
	};
	
	
	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map((item) => {
				return (
					<CartItem 
						key={item.id}
						item={item}
						addToCart={addToCart}
						removeFromCart={removeFromCart}
					/>
				);
			})}
			{calculateTotal(cartItems)}
		</Wrapper>
	);
};



export default Cart



