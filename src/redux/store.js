import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./feature/persist";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddelware) => getDefaultMiddelware({serializableCheck : false})
})


export const persistor = persistStore(store)

export default store