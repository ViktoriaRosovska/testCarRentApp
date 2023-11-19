import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import { favoriteReducer } from "./adverts/favorites/favoriteSlice";
import persistReducer from "redux-persist/es/persistReducer";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
    adverts: advertsReducer,
    // filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
