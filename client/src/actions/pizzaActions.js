import axios from "axios";

export const getAllPizzas = () =>async dispatch => {

    dispatch({ type: 'GET_PIZZAS_REQUEST' })


    try {
        const response = await axios.get('/api/pizzas/getpizzas')
        console.log(response);
        dispatch({ type: 'GET PIZZAS_SUCCESS' })
    } catch (error) {

        dispatch({ type: 'GET_PIZZAS FAILED' })
    }

}