import { types } from "../actionTypes"
import {httpRequest} from '../../config'
import { store } from ".."

export const signup=(data, cb)=> async dispatch=>{
    try {
        dispatch({type:types.SIGNUP.start})
        const res= await httpRequest.post('/signup',data)
       const result= res.data
        if( result && typeof result ==='object'){
            dispatch({type:types.SIGNUP.success, payload:result})
            dispatch(setToast('success','Account created successfully'))
            cb&& cb(result)
        }else{
            dispatch({type:types.SIGNUP.failed})
        }
    } catch (error) {
        dispatch({type:types.SIGNUP.failed})
    }
}

export const login=(data,cb)=> async dispatch=>{
    try {
        dispatch({type:types.LOGIN.start})
        const res= await httpRequest.post('/login',data)
       const result= res.data
        if( result && typeof result ==='object'){
            dispatch({type:types.LOGIN.success, payload:result})
            cb&& cb(result)
        }else{
            dispatch({type:types.LOGIN.failed})
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

