// https://www.youtube.com/watch?v=sfmL6bGbiN8
//  0hs 16'  10''
import { useState } from 'react';
import { useQuery } from 'react-query';

// Styles
//import { Wrapper } from './App.styles';
import './App.css';

// Components 
import Item from './Item/Item' ;
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';



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
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
	
	console.log(data); 
	
	const getTotalItems = () => null;
	
	const handleAddToCart = (clickedItem: CartItemType) => null;
	
	const handleRemoveFromCart = () => null;
	
	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;
	
	
	return (
    <div className="App">
      <Grid container spacing={3}>
				{data?.map((item) => {
					return (
						<Grid item key={item.id} xs={12} sm={4}>
							<Item item={item} handleAddToCart={handleAddToCart} />
						</Grid>
					);
				})}
			</Grid>
    </div>
  );
}

export default App;


