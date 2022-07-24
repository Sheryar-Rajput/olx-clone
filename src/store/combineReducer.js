import { combineReducers } from "redux"
import adsReducer from "./ads/adsReducer"
import userReducer from "./users/userReducer"
function reducer(){
    combineReducers( {
        adsReducer,
        userReducer
    }

    )
  
}

export default reducer