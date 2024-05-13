import axios from "axios";
import { ELECTION_DELETE_FAIL, ELECTION_DELETE_REQUEST, ELECTION_DELETE_SUCCESS, ELECTION_GET_FAIL, ELECTION_GET_REQUEST, ELECTION_GET_SUCCESS, ELECTION_POST_FAIL, ELECTION_POST_REQUEST, ELECTION_POST_SUCCESS } from "../../type";


//get-user
export const getElection = () => {
    return async (dispatch) => {
        dispatch({
            type: ELECTION_GET_REQUEST,
        });

        try{
            let res = await axios.get('http://13.127.211.205:8000/v1/election/list')
        dispatch({
            type: ELECTION_GET_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: ELECTION_GET_FAIL,
                    payload: err
                })
        }
        
    }
}


//add-user
export const AddElection = (electionData) => {
    return async (dispatch) => {
        dispatch({
            type: ELECTION_POST_REQUEST,
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/election/create', electionData)
        dispatch({
            type: ELECTION_POST_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: ELECTION_POST_FAIL,
                    payload: err
                })
        }
        
    }
}


//delete-party
export const DeleteElection = (_id) => {
    return async (dispatch) => {
        dispatch({
            type: ELECTION_DELETE_REQUEST
        });

        try{
            let res = await axios.delete(`http://13.127.211.205:8000/v1/election/delete/${_id}`)
        //    console.log(res,"delete ELECTION");
        dispatch({
            type: ELECTION_DELETE_SUCCESS,
            payload: _id
        })
        
        }
        catch(err){
                dispatch({
                    type: ELECTION_DELETE_FAIL,
                    payload: err
                })
        }
        
    }
}