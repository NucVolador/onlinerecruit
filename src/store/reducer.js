import { combineReducers } from "redux-immutable";
import { reducer as Blank } from "../page/blank/store"
import { reducer as Header} from "../component/header/store";

const reducer = combineReducers({
    Blank,
    Header
});

export default reducer;