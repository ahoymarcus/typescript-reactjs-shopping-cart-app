import styled from 'styled-components';

import Button from '@material-ui/core/Button';
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
	
	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map((item) => {
				return <CartItem />;
			})}
		</Wrapper>
	);
};



export default Cart



