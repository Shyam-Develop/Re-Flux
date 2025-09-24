import { configureStore } from "@reduxjs/toolkit";

import listviewReducer from "./slice/listviewSlice"
import postSliceReducer from "./slice/postSlice";
export const store = configureStore({
    reducer:{
     listview: listviewReducer,
       postSlice:postSliceReducer,
    }
})

