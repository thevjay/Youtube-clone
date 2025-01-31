import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import searchSlice from './searchSlice'
import chartSlice from './chartSlice'

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chart: chartSlice,
    }
})

export default store;