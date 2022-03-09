import { types } from "../actionTypes"
import {httpRequest} from '../../config'
import { store } from ".."
import { setToast } from "./toastAction"

export const getFriendRequest=(cb)=> async dispatch=>{
    try {
        const id = store.getState().user.id
        console.log(id)
        const token = store.getState().user.token
        dispatch({type:types.GET_FRIEND_REQUEST.start})
        const headers={'X-Authorization':token}
        const res= await httpRequest.get('/friendrequests',{headers})
       const result= res.data
        if( res.status===200){
            console.log("get friend request===============",result)
            dispatch({type:types.GET_FRIEND_REQUEST.success, payload:result})
            cb&& cb(result)
        }else{
            dispatch({type:types.GET_FRIEND_REQUEST.failed})
        }
    } catch (error) {
        dispatch({type:types.GET_FRIEND_REQUEST.failed})
        console.log(error)
    }
}
export const sendFriendRequest=(id, cb)=> async dispatch=>{
    try {
        dispatch({type:types.SEND_FRIEND_REQUEST.start})
       
        const token = store.getState().user.token
        dispatch({type:types.SEND_FRIEND_REQUEST.start})
        const headers={'X-Authorization':token}

        const res= await httpRequest.post(`/user/${id}/friends`,{}, {headers})

        if( res.status===201){
            dispatch({type:types.SEND_FRIEND_REQUEST.success})
            dispatch(setToast('success','Friend Request sent successfully'))
            dispatch(getFriendRequest(()=>cb?cb():{}))
            
        
        }
        
        else{
            dispatch({type:types.SEND_FRIEND_REQUEST.failed})
            
        }
    } catch (error) {
        dispatch({type:types.SEND_FRIEND_REQUEST.failed})
        if(error.message.indexOf('403') !== -1){        
            dispatch(setToast('warning','Friend Request Already Sent, Please check friend request list'))
        }
        
        
        else{
            dispatch(setToast('error','Server Error'))
        }
        console.log(error.code)
    }
}




export const acceptFriendRequest=(id, cb)=> async dispatch=>{
    try {
        dispatch({type:types.ACCEPTS_FRIEND_REQUEST.start})
       
        const token = store.getState().user.token
        dispatch({type:types.ACCEPTS_FRIEND_REQUEST.start})
        const headers={'X-Authorization':token}

        const res= await httpRequest.post(`/friendrequests/${id}`,{}, {headers})
        console.log("accept =======",res)
        if( res.status===200){
            dispatch({type:types.ACCEPTS_FRIEND_REQUEST.success})
            dispatch(setToast('success','Congrats! you have a new friend'))
            dispatch(getFriendRequest(()=>cb?cb():{}))
            // cb&& cb()
        
        }else{
            dispatch({type:types.ACCEPTS_FRIEND_REQUEST.failed})
            dispatch(setToast('error',res))
        }
    } catch (error) {
        dispatch({type:types.ACCEPTS_FRIEND_REQUEST.failed})
        dispatch(setToast('error',error.message))
        console.log("eror===============",error)
    }
}


export const RejectFriendRequest=(id, cb)=> async dispatch=>{
    try {
        dispatch({type:types.REJECT_FRIEND_REQUEST.start})
       
        const token = store.getState().user.token
        dispatch({type:types.REJECT_FRIEND_REQUEST.start})
        const headers={'X-Authorization':token}

        const res= await httpRequest.delete(`/friendrequests/${id}`, {headers})

        if( res.status===200){
            dispatch({type:types.REJECT_FRIEND_REQUEST.success})
            dispatch(getFriendRequest(()=>cb?cb():{}))
        
        }else{
            dispatch({type:types.REJECT_FRIEND_REQUEST.failed})
        }
    } catch (error) {
        dispatch({type:types.REJECT_FRIEND_REQUEST.failed})
    }
}


export const searchFriend=(string, cb)=> async dispatch=>{
    try {
        dispatch({type:types.SEARCH_FRIENDS.start})
       
        const token = store.getState().user.token
        dispatch({type:types.SEARCH_FRIENDS.start})
        const headers={'X-Authorization':token}

        const res= await httpRequest.get(`search?q=${string}&limit=20&offset=0`,{headers})

        if( res.status===200){
            dispatch({type:types.SEARCH_FRIENDS.success, payload:res.data})
            cb&& cb(res.data)
        
        }else{
            dispatch({type:types.SEARCH_FRIENDS.failed})
        }
    } catch (error) {
        dispatch({type:types.SEARCH_FRIENDS.failed})
    }
}


export const getFriends=(cb)=> async dispatch=>{
    try {
        dispatch({type:types.GET_FRIENDS.start})
        const id= store.getState().user.id
        const token = store.getState().user.token
        dispatch({type:types.GET_FRIENDS.start})
        const headers={'X-Authorization':token}

        const res= await httpRequest.get(`/user/${id}/friends`, {headers})

        if( res.status===200){
            dispatch({type:types.GET_FRIENDS.success,payload:res.data})
            cb&& cb()
        
        }else{
            dispatch({type:types.GET_FRIENDS.failed})
        }
    } catch (error) {
        dispatch({type:types.GET_FRIENDS.failed})
    }
}