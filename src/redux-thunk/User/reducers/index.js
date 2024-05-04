
import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { partyReducer } from "./partyReducer";
import { electionReducer } from "./electionReducer";



const rootReducers = combineReducers({
    UserList : userReducer,
    PartyList : partyReducer,
    ElectionList : electionReducer
});

export default rootReducers;