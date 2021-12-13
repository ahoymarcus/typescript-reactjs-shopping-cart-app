// https://www.youtube.com/watch?v=sfmL6bGbiN8
//  0hs 45'  50''
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

// Components 
import Item from './Item/Item';
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';


// Styles
const Wrapper = styled.div`
	margin: 40px;
`;

const StyledButton = styled(IconButton)`
	position: fixed;
	z-index: 100;
	right: 20px;
	top: 20px;
`;


// types
export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number; 
};
 
   
const getProducts = async(): Promise<CartItemType[]> => {
	return await (await fetch('https://fakestoreapi.com/products')).json();
};
 
 
 
const App = () => {
	const [cartOpen, setCartOpen ] = useState(false);
	const [ cartItems, setCartItems ] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
	
	// Renderização condicional para o Fetch
	console.log(data); 
	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;
	
	
	const getTotalItems = (items: CartItemType[]) => {
		return items.reduce((ack, item) => ack + item.amount, 0);
	};
	
	const handleAddToCart = (clickedItem: CartItemType) => null;
	
	const handleRemoveFromCart = () => null;
	
	
	
	
	return ( 
    <Wrapper>
			<Drawer 
				anchor='right' 
				open={cartOpen} 
				onClose={() => setCartOpen(false)} 
			>
				<Cart 
					cartItems={cartItems}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</Drawer>
			
			<StyledButton onClick={() => setCartOpen(true)} >
				<Badge badgeContent={getTotalItems(cartItems)} color='error'>
					<AddShoppingCartIcon />
				</Badge>
			</StyledButton>
      
			<Grid 
				container 
				spacing={3}
			>
				{data?.map((item) => {
					return (
						<Grid 
							item 
							key={item.id} 
							xs={12} 
							sm={4}
						>
							<Item 
								item={item} 
								handleAddToCart={handleAddToCart}
							/>
						</Grid>
					);
				})}
			</Grid>
    </Wrapper>
  );
}

export default App;


