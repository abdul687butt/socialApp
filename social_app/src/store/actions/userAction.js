import { types } from "../actionTypes"
import {httpRequest} from '../../config'
import { store } from ".."
import { setToast } from "./toastAction"

export const signup=(data, cb)=> async dispatch=>{
    try {
        dispatch({type:types.SIGNUP.start})
        const res= await httpRequest.post('/user',data)
       const result= res.data
     
       if(res.status===400){
        dispatch({type:types.SIGNUP.failed})
         return   dispatch(setToast('error',res))
        
        }
        if(res.status===500){
            dispatch({type:types.SIGNUP.failed})
            return dispatch(setToast('error','Server Error'))
        }
        if(res.status===201){
            dispatch({type:types.SIGNUP.success, payload:result})
                dispatch(setToast('success','Account created successfully'))
                cb&& cb(result)
        }
       
   
    } catch (error) {
        dispatch({type:types.SIGNUP.failed})
        console.log(error)
    }
}

export const login=(data,cb)=> async dispatch=>{
    try {
        dispatch({type:types.LOGIN.start})
        const res= await httpRequest.post('/login',data)
        const result= res.data
        console.log("run--------------------------",{ res})
        
        if(res.status===200){
            dispatch({type:types.LOGIN.success, payload:result})
                cb&& cb(result)
        }else{
            dispatch({type:types.LOGIN.failed})
           

        }
     
        
    } catch (error) {
        dispatch({type:types.LOGIN.failed})
        dispatch(setToast('error',error.message))
        console.log(error)
    }
}

export const logout=(cb)=> dispatch=>{
    try {
        console.log("logout=============")
        dispatch({type:types.LOGOUT.success})  
        cb&& cb()
    } catch (error) {
        dispatch({type:types.LOGOUT.failed})
    }
}


export const getProfile=(cb)=> async dispatch=>{
    try {
        const id = store.getState().user.id
        const token = store.getState().user.token
        
        dispatch({type:types.GET_PROFILE.start})
        
        const headers={'X-Authorization':token}
        const res= await httpRequest.get(`/user/${id}`,{headers})
        const result= res.data
        console.log("res========================",res)
        
        if( res.status===200){
            dispatch({type:types.GET_PROFILE.success, payload:result})
            cb&& cb(result)
        }else{
            dispatch({type:types.GET_PROFILE.failed})
        }
    } catch (error) {
        dispatch(setToast('error',error.message))
        dispatch({type:types.GET_PROFILE.failed})
        console.log("err================",error)
    }
}

