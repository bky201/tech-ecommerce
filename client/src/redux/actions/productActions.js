import { setProducts, setLoading, setError, setPagination, setFavorites, setFavoritesToggle } from '../slices/product';
import axios from 'axios';

export const getProducts = (page, favouriteToggle) => async (dispatch) => {
	dispatch(setLoading());
	try {
		const { data } = await axios.get(`/api/products/${page}/${10}`);
		const { products, pagination } = data;
		dispatch(setProducts(products));
		dispatch(setPagination(pagination));
	} catch (error) {
		dispatch(
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
					? error.message
					: 'An expected error has occured. Please try again later.'
			)
		);
	}
};
