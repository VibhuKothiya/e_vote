
import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { partyReducer } from "./partyReducer";
import { electionReducer } from "./electionReducer";
import { partyConnectionReducer } from "./partyConnection";
import { AdminReducer } from "../../Admin/reducers/adminreducer";



const rootReducers = combineReducers({
    UserList : userReducer,
    PartyList : partyReducer,
    ElectionList : electionReducer,
    ConnctionList : partyConnectionReducer,
    admin : AdminReducer
});

export default rootReducers;