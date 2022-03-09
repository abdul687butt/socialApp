import axios  from "axios";

const baseURL= "http://192.168.7.213:3333/api/1.0.0/"

// const baseURL= "http://192.168.1.105:3333/api/1.0.0/"
export const httpRequest = axios.create({baseURL: baseURL});

// export const url={
//     signup:'/user',
//     login:'/login',
//     searchUser:'/search',
//     sendRequest:'/friendrequests',//port
//     acceptFriendRequest:'/friendrequests/{user_id}',
//     rejectFriendRequest:'/friendrequests/{user_id}',
//     userProfile:'/',
    
    
// }