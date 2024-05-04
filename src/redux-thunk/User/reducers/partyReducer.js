import { PARTY_DELETE_FAIL, PARTY_DELETE_REQUEST, PARTY_DELETE_SUCCESS, PARTY_GET_FAIL, PARTY_GET_REQUEST, PARTY_GET_SUCCESS, PARTY_POST_FAIL, PARTY_POST_REQUEST, PARTY_POST_SUCCESS } from "../../type";


let initialstate = {
    partyData: [],
    isLoading: false,
    error: null,
    id: null,
    admin: null,
    isLogin: false,
    
}

export const partyReducer = (state = initialstate, action) => {
    switch (action.type) {

        //party-add            
        case PARTY_POST_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case PARTY_POST_SUCCESS:
            console.log(action.payload, "partyy Add");
            return {
                ...state,
                isLoading: false,
                partyData: [...state.partyData, action.payload]                                        

            };

        case PARTY_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        //party-GET            
        case PARTY_GET_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case PARTY_GET_SUCCESS:
           
            return {
                ...state,
                isLoading: false,
                partyData: action.payload                                        

            };

        case PARTY_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            //party-delete            
        case PARTY_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case PARTY_DELETE_SUCCESS:
          
            return {
                ...state,
                isLoading: false,
                partyData: state.partyData.filter((val)=>val._id !== action.payload)                                        

            };

        case PARTY_DELETE_FAIL:
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