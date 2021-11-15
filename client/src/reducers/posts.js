import {FETCH_ALL,CREATE_POST,UPDATE,DELETE,LIKE_POST} from '../constants/actionTypes';
export const posts = (postsData = [],action) => {
switch(action.type){
    case DELETE:
        return postsData.filter((post) => post._id !== action.payload);
    case UPDATE:
    case LIKE_POST:    
        return postsData.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
    return action.payload;

    case CREATE_POST:
        return [...postsData,action.payload];

    default:
        return postsData;
}
}