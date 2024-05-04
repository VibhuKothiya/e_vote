import axios from "axios";
import { PARTY_DELETE_FAIL, PARTY_DELETE_REQUEST, PARTY_DELETE_SUCCESS, PARTY_GET_FAIL, PARTY_GET_REQUEST, PARTY_GET_SUCCESS, PARTY_POST_FAIL, PARTY_POST_REQUEST, PARTY_POST_SUCCESS } from "../../type";


//get-party
export const getPartyData = () => {
    return async (dispatch) => {
        dispatch({
            type: PARTY_GET_REQUEST
        });

        try{
            let res = await axios.get('http://13.127.211.205:8000/v1/party/list')
           console.log(res.data.data, "action");
        dispatch({
            type: PARTY_GET_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: PARTY_GET_FAIL,
                    payload: err
                })
        }
        
    }
}


//add-party
export const SubmitPartyData = (data) => {
    return async (dispatch) => {
        dispatch({
            type: PARTY_POST_REQUEST
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/party/create_party', data)
            console.log(res,"party postttt");
        dispatch({
            type: PARTY_POST_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: PARTY_POST_FAIL,
                    payload: err
                })
        }
        
    }
}

//delete-party
export const DeleteParty = (_id) => {
    return async (dispatch) => {
        dispatch({
            type: PARTY_DELETE_REQUEST
        });

        try{
            let res = await axios.delete(`http://13.127.211.205:8000/v1/party/delete/${_id}`)
           console.log(res,"delete party");
        dispatch({
            type: PARTY_DELETE_SUCCESS,
            payload: _id
        })
        
        }
        catch(err){
                dispatch({
                    type: PARTY_DELETE_FAIL,
                    payload: err
                })
        }
        
    }
}

