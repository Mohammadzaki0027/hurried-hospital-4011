
import {GET_FLIGHT_FAILURE,GET_FLIGHT_REQUEST,GET_FLIGHT_SUCESS} from "./actionTypes"
import axios from "axios"
const getRequest=()=>{
    return {
        type:GET_FLIGHT_REQUEST
    }
}
const getSucess=(payload)=>{
    return {
        type:GET_FLIGHT_SUCESS,
        payload
    }
}
const getFailure=()=>{
    return {
        type:GET_FLIGHT_FAILURE
    }
}
export const flightData=(val)=>(dispatch)=>{
    dispatch(getRequest())
  return axios.get(`https://waytoglobe.onrender.com/flight?sort=${val}`).then((res)=>{
           console.log(res.data);
   return  dispatch(getSucess(res.data))
 }).catch((err)=>{
    dispatch(getFailure(err))
 })
}