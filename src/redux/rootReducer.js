import { combineReducers } from "redux";
import contactsReducer from "./pfonebook/contactsReducer";
import authReducer from "./auth/authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["idToken"],
};

const rootReducer = combineReducers({
  contactsItem: contactsReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export default rootReducer;
