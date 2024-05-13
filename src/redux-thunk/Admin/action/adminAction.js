import axios from "axios";
import { ADMIN_LOGIN_POST_FAIL, ADMIN_LOGIN_POST_REQUEST, ADMIN_LOGIN_POST_SUCCESS } from "../../type";


export const adminLoginDataSubmit = (AdminLoginData) => {
    return async (dispatch) => {
        dispatch({
            type: ADMIN_LOGIN_POST_REQUEST,
        });

        try{
            let res = await axios.post('http://13.127.211.205:8000/v1/login/admin', AdminLoginData)
            localStorage.setItem("adminLoginData", JSON.stringify(res.data))
            console.log(res,"admin llogin");
            
        dispatch({
            type: ADMIN_LOGIN_POST_SUCCESS,
            payload: res.data
        })
        
        }
        catch(err){
                dispatch({
                    type: ADMIN_LOGIN_POST_FAIL,
                    payload: err
                })
        }
        
    }
}
