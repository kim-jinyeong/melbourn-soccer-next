import { combineReducers } from "redux";
import adminReducer from "./admin.reducer"
import baiscReducer from "./basic.reducer"
import boardReducer from "./board.reducer"
import gameReducer from "./game.reducer"
import commonReducer from "./common.reducer"
import userReducer from "./user.reducer"

const rootReducer = combineReducers({
    adminReducer,
    baiscReducer,
    boardReducer,
    gameReducer,
    commonReducer,
    userReducer
})

export default rootReducer