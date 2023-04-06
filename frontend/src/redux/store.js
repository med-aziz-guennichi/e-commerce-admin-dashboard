import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import userRedux from "./userRedux"
import { persistStore, FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit"
import cartRedux from "./cartRedux"

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const rootReducer = combineReducers({ user: userRedux, cart: cartRedux });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);