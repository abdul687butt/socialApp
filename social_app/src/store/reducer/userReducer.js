import { types } from '../actionTypes'

const initialState = {
	isLoading:false,
    id :'',
    token:'',
    user:{}

}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGNUP.start:
			return { ...state, isLoading:true }
		case types.SIGNUP.success:
            return {...state, isLoading:false}
        case types.SIGNUP.failed:
            return{...state, isLoading:false}
        
        case types.LOGIN.start:
            return { ...state, isLoading:true }
        case types.LOGIN.success:
            return {...state, isLoading:false, id:payload.id, token:payload.token}
        case types.LOGIN.failed:
            return{...state, isLoading:false}
    
        case types.GET_PROFILE.start:
            return { ...state, isLoading:true }
        case types.GET_PROFILE.success:
            return {...state, isLoading:false, user:payload}
        case types.GET_PROFILE.failed:
            return{...state, isLoading:false}
            
    
		case types.LOGOUT.success:
			return { ...state, id:'', token:'',user: {}}
		default:
			return state
	}

}
