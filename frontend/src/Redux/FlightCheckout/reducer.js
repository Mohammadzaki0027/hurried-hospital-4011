import { GET_SUCESS } from "./actionTypes"



const init={
    data:{},
}

const TitleReducer=(state=init,action)=>{
    const {type,payload}=action
  
    switch(type){
        case GET_SUCESS:
            return {...state,data:payload}
        default:
            return state
    }
}
export {TitleReducer}