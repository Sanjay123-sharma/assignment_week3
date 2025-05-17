import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SliceReducer from './Slice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer=combineReducers({
    todo:SliceReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),

});

export const myPersistor=persistStore(store)
