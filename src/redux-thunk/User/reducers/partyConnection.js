import { PARTYCONNECTION_GET_FAIL, PARTYCONNECTION_GET_REQUEST, PARTYCONNECTION_GET_SUCCESS, PARTY_CONNECTION_POST_FAIL, PARTY_CONNECTION_POST_REQUEST, PARTY_CONNECTION_POST_SUCCESS } from "../../type";


let initialstate = {
    partyConnectionData: [],
    isLoading: false,
    error: null,
    id: null,
    admin: null,
    isLogin: false,
    
}


export const partyConnectionReducer = (state = initialstate, action) => {
    switch (action.type) {
            //party-GET            
        case PARTYCONNECTION_GET_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case PARTYCONNECTION_GET_SUCCESS:
           
            return {
                ...state,
                isLoading: false,
                partyConnectionData: action.payload                                        

            };

        case PARTYCONNECTION_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

             //party-connection-add            
        case PARTY_CONNECTION_POST_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case PARTY_CONNECTION_POST_SUCCESS:
            // console.log(action.payload, "partyy Add");
            return {
                ...state,
                isLoading: false,
                partyConnectionData: [...state.partyConnectionData, action.payload]                                        

            };

        case PARTY_CONNECTION_POST_FAIL:
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