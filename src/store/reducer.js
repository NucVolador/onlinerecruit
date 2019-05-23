import { combineReducers } from "redux-immutable";
import { reducer as Blank } from "../page/blank/store"
import { reducer as Header} from "../component/header/store";
import { reducer as Home } from  "../page/home/store"
import { reducer as Login } from  "../page/login/store"

const reducer = combineReducers({
    Blank,
    Header,
	Home,
    Login
});

export default reducer;