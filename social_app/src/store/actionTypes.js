const manageActionType = type => {
    return {
      start: type + '_Start',
      success: type + '_Success',
      failed: type + '_Failed',
    };
  };
  
export const types={
    SIGNUP: manageActionType('SIGNUP'), 
    LOGIN: manageActionType('LOGIN'), 
    LOGOUT: manageActionType('LOGOUT'), 
    GET_FRIEND_REQUEST: manageActionType('GET_FRIEND_REQUEST'),
    GET_FRIENDS: manageActionType('GET_FRIENDS'),
    SEND_FRIEND_REQUEST: manageActionType('SEND_FRIEND_REQUEST'),
    ACCEPTS_FRIEND_REQUEST: manageActionType('ACCEPTS_FRIEND_REQUEST'),
    REJECT_FRIEND_REQUEST: manageActionType('REJECT_FRIEND_REQUEST'),
    SEARCH_FRIENDS: manageActionType('SEARCH_FRIENDS'),
    GET_PROFILE: manageActionType('GET_PROFILE'),

}