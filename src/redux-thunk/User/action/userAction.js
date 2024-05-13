import axios from "axios";
import { USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_GET_FAIL, USER_GET_REQUEST, USER_GET_SUCCESS, USER_LOGIN_POST_FAIL, USER_LOGIN_POST_REQUEST, USER_LOGIN_POST_SUCCESS, USER_POST_FAIL, USER_POST_REQUEST, USER_POST_SUCCESS } from "../../type";


//User-Login-data

export const userLoginDataSubmit = (loginData) => {
    return async (dispatch) => {
        dispatch({
            type: USER_LOGIN_POST_REQUEST,
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/login/user', loginData)
            console.log(res, "UserLoginData");
            localStorage.setItem("userLoginData", JSON.stringify(res.data.data.UserList))
            
        dispatch({
            type: USER_LOGIN_POST_SUCCESS,
            payload: res.data.data.UserList
        })
        
        }
        catch(err){
                dispatch({
                    type: USER_LOGIN_POST_FAIL,
                    payload: err
                })
        }
        
    }
}



//get-user
export const UserDataList = () => {
    return async (dispatch) => {
        dispatch({
            type: USER_GET_REQUEST,
        });

        try{
            let res = await axios.get('http://13.127.211.205:8000/v1/user/list')
            console.log(res, "Get-UserData");
        dispatch({
            type: USER_GET_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: USER_GET_FAIL,
                    payload: err
                })
        }
        
    }
}

//add-user
export const AddNewUser = (addUser) => {
    return async (dispatch) => {
        dispatch({
            type: USER_POST_REQUEST,
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/user/create', addUser)
            
        dispatch({
            type: USER_POST_SUCCESS,
            payload: res.data.data
        })
        
        }
        catch(err){
                dispatch({
                    type: USER_POST_FAIL,
                    payload: err
                })
        }
        
    }
}

//delete-user
export const DeleteUser = (_id) => {
    return async (dispatch) => {
        dispatch({
            type: USER_DELETE_REQUEST,
        });

        try{
            let res = await axios.delete(`http://13.127.211.205:8000/v1/user/delete/${_id}`)
           console.log(res, "ID");
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: _id
        })
        
        }
        catch(err){
                dispatch({
                    type: USER_DELETE_FAIL,
                    payload: err
                })
        }
        
    }
}

