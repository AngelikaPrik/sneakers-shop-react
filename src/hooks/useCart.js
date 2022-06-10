import { useContext } from 'react';
import AppContext from '../Context';

export const useCart = () => {
	const { addedItems, setAddedItems } = useContext(AppContext);
	const totalPrice = addedItems.reduce((sum, obj) => Number(obj.price) + sum, 0);

	return {addedItems, setAddedItems, totalPrice}
}
