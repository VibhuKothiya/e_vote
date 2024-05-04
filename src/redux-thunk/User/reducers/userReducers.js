import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_GET_FAIL, USER_GET_REQUEST, USER_GET_SUCCESS, USER_POST_FAIL, USER_POST_REQUEST, USER_POST_SUCCESS } 
from "../../type";



let initialstate = {
    userData: [],
    isLoading: false,
    error: null,
    id: null,
    admin: null,
    isLogin: false,
    
}

export const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        //GET
        case USER_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case USER_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
                isLogin: true                

            };

        case USER_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            //POST
            case USER_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case USER_POST_SUCCESS:
           
            return {
                ...state,
                isLoading: false,
                userData: [...state.userData, action.payload]
                                         

            };

        case USER_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            //DELETE
            case USER_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true
                
            };

            case USER_DELETE_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                userData: state.userData.filter((val)=>val._id !== action.payload._id)
                                        

            };

        case USER_DELETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            
            default :{
                return state;   
            }
            
        }
    }