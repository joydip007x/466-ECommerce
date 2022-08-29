import axios from 'axios';
const delay = ms => new Promise(res => setTimeout(res, ms));


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
export const addNewProducts=(product)=>async dispatch=>{

    dispatch({type:'CREATE_NEWPROD_REQ'})

    try {
        const response = await axios.post('/storeAPI/products/addNewProduct',product)
        console.log(response)
        dispatch({type:'CREATE_NEWPROD_SUCCESS', payload: response.data})
        await delay(3000);
        window.location.href='/'

    } catch (error) {
        dispatch({type:'CREATE_NEWPROD_FAILED' , payload:error})
    }

}