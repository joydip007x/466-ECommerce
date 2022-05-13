import axios from 'axios';
export const getAllProducts=()=>async dispatch=>{

        dispatch({type:'GET_All_REQ'})

        try {
            const response = await axios.get('/storeAPI/products/getAllProducts')
            console.log(response)
            dispatch({type:'GET_All_SUCCESS', payload: response.data})

        } catch (error) {
            dispatch({type:'GET_All_FAILED' , payload:error})
        }

}