import styled from 'styled-components';

import Button from '@material-ui/core/Button';

// Types
import { CartItemType } from '../App';



// Styles
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border: 1px solid lightblue;
	border-radius: 20px;
	background-color: #dfdfb1; /*#bdbd8e;*/
	
	img {
		max-length: 250px;
		object-fit: cover;
		border-radius: 20px 20px 0 0;
	}
	
	div {
		font-family: Arial, Helvetica, sans-serif;
		padding: 1rem;
		height: 100%;
	}	
	
	button {
		border-radius: 0 0 20px 20px;
	}
`;


type Props = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
};


const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
	
	
	return (
		<Wrapper>
			<img src={item.image} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3>${item.price}</h3>
			</div>
			<Button onClick={() => handleAddToCart(item)} >
				Add to Cart 
			</Button>
		</Wrapper>
	);
};



export default Item


