import { ADMIN_LOGIN_POST_SUCCESS, ADMIN_LOGOUT_POST_SUCCESS } from "../../type";



let initialState = {
    isAdminLogin: false
}


export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        //User-Login-data
        

        case ADMIN_LOGIN_POST_SUCCESS:
           
            return {
                
                isAdminLogin: true
                                                    

            };

        case ADMIN_LOGOUT_POST_SUCCESS:
           
            return {
                
                isAdminLogin: false
                                                    

            };

        default :
                   return state     





        
    }
}