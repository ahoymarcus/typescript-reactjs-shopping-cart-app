import Button from '@material-ui/core/Button';

// Types
import { CartItemType } from '../App';

// Styles
//import { Wrapper } from './Item.styles';
import './item.css';



type Props = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
};


const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
	
	
	return (
		<div>
			<img src={item.image} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3>${item.price}</h3>
			</div>
			<Button onClick={() => handleAddToCart(item)} >Add to Cart </Button>
		</div>
	);
};



export default Item


