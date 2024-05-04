import { ELECTION_DELETE_FAIL, ELECTION_DELETE_REQUEST, ELECTION_DELETE_SUCCESS, ELECTION_GET_FAIL, ELECTION_GET_REQUEST, ELECTION_GET_SUCCESS, ELECTION_POST_FAIL, ELECTION_POST_REQUEST, ELECTION_POST_SUCCESS } from "../../type";


let initialstate = {
    ElectionData: [],
    isLoading: false,
    error: null,
    id: null,
    admin: null,
    isLogin: false,
    
}

export const electionReducer = (state = initialstate, action) => {
    switch (action.type) {
        //election-get
        
        case ELECTION_GET_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case ELECTION_GET_SUCCESS:
           
            return {
                ...state,
                isLoading: false,
                ElectionData: action.payload                                        

            };

        case ELECTION_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            //election-add            
        case ELECTION_POST_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case ELECTION_POST_SUCCESS:
            console.log(action.payload, "ELECTION Add");
            return {
                ...state,
                isLoading: false,
                ElectionData: [...state.ElectionData, action.payload]                                        

            };

        case ELECTION_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

            //election-delete            
        case ELECTION_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true                
            };

        case ELECTION_DELETE_SUCCESS:
          
            return {
                ...state,
                isLoading: false,
                ElectionData: state.ElectionData.filter((val)=>val._id !== action.payload)                                        

            };

        case ELECTION_DELETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };


            default:{
                return state;
            }
    }
}



