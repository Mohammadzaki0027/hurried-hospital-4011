
import * as types from "./actionTypes"

const getData=(data)=>(dispatch)=>{
    dispatch({type:types.GET_REQUEST})
    dispatch({type:types.GET_SUCESS,payload:data})
    dispatch({type:types.GET_FAILURE})
}
export {getData}