import axios from "axios";
import { PARTYCONNECTION_GET_FAIL, PARTYCONNECTION_GET_REQUEST, PARTYCONNECTION_GET_SUCCESS, PARTY_CONNECTION_POST_FAIL, PARTY_CONNECTION_POST_REQUEST, PARTY_CONNECTION_POST_SUCCESS } from "../../type";


export const getPartyConnectionData = () => {
    return async (dispatch) => {
        dispatch({
            type: PARTYCONNECTION_GET_REQUEST
        });

        try{
            let res = await axios.get('http://13.127.211.205:8000/v1/partylist/list')
           console.log(res.data.data, "PARTY CONNECTION");
        dispatch({
            type: PARTYCONNECTION_GET_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: PARTYCONNECTION_GET_FAIL,
                    payload: err
                })
        }
        
    }
}


//POST
export const submitConnectionPartyData = (connectionData) => {
    return async (dispatch) => {
        dispatch({
            type: PARTY_CONNECTION_POST_REQUEST
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/partylist/create', connectionData)
        //    console.log(res.data.data, " party list conection");
        dispatch({
            type: PARTY_CONNECTION_POST_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: PARTY_CONNECTION_POST_FAIL,
                    payload: err
                })
        }
        
    }
}

