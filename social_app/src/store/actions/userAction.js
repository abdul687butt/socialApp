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
         return   dispatch(setToast('error','Bad Request'))
        
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
        const res= await httpRequest.post('/user',data)
       const result= res.data
     
       if(res.status===400){
        dispatch({type:types.LOGIN.failed})
         return   dispatch(setToast('error','Bad Request'))
        
        }
        if(res.status===500){
            dispatch({type:types.LOGIN.failed})
            return dispatch(setToast('error','Server Error'))
        }
        if(res.status===201){
            dispatch({type:types.LOGIN.success, payload:result})
                cb&& cb(result)
        }
    } catch (error) {
        dispatch({type:types.LOGIN.failed})
    }
}

export const logout=(cb)=> async dispatch=>{
    try {
        dispatch({type:types.LOGIN.success})  
        cb&& cb(result)
    } catch (error) {
        dispatch({type:types.LOGIN.failed})
    }
}


export const getProfile=(cb)=> async dispatch=>{
    try {
        const id = store.getState().user.id
        dispatch({type:types.GET_PROFILE.start})
        const res= await httpRequest.gett(`/user/${id}`)
       const result= res.data
        if( result && typeof result ==='object'){
            dispatch({type:types.GET_PROFILE.success, payload:result})
            cb&& cb(result)
        }else{
            dispatch({type:types.GET_PROFILE.failed})
        }
    } catch (error) {
        dispatch({type:types.GET_PROFILE.failed})
    }
}

