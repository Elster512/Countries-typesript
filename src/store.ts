import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./slices/countries/countries-slice";
import { themeReducer } from "./slices/theme/theme-slice";
import axios from "axios";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
