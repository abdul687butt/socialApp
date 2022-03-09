import { types } from '../actionTypes'

const initialState = {
	isLoading:false,
    friendList:[],
    friendRequestList:[]
}

export const friendReducer = (state = initialState, {type,payload}) => {
	switch (type) {
		case types.SEND_FRIEND_REQUEST.start:
			return { ...state, isLoading:true }
		case types.SEND_FRIEND_REQUEST.success:
            return {...state, isLoading:false}
        case types.SEND_FRIEND_REQUEST.failed:
            return{...state, isLoading:false}
        
            case types.ACCEPTS_FRIEND_REQUEST.start:
			return { ...state, isLoading:true }
		case types.ACCEPTS_FRIEND_REQUEST.success:
            return {...state, isLoading:false}
        case types.ACCEPTS_FRIEND_REQUEST.failed:
            return{...state, isLoading:false}

        case types.REJECT_FRIEND_REQUEST.start:
			return { ...state, isLoading:true }
		case types.REJECT_FRIEND_REQUEST.success:
            return {...state, isLoading:false}
        case types.REJECT_FRIEND_REQUEST.failed:
            return{...state, isLoading:false}
        
        case types.GET_FRIEND_REQUEST.start:
            return { ...state, isLoading:true }
        case types.GET_FRIEND_REQUEST.success:
            return {...state, isLoading:false, friendRequestList:payload}
        case types.GET_FRIEND_REQUEST.failed:
            return{...state, isLoading:false}
    
        case types.GET_FRIENDS.start:
            return { ...state, isLoading:true }
        case types.GET_FRIENDS.success:
            return {...state, isLoading:false, friendList:payload}
        case types.GET_FRIENDS.failed:
            return{...state, isLoading:false}
        
        case types.SEARCH_FRIENDS.start:
            return { ...state, isLoading:true }
        case types.SEARCH_FRIENDS.success:
            return {...state, isLoading:false, }
        case types.SEARCH_FRIENDS.failed:
            return{...state, isLoading:false}    		
		default:
			return state
	}

}
