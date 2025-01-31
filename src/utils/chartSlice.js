import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHART } from "./constants";

const chartSlice = createSlice({
    name:"chart",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_LIVE_CHART,1)
            state.messages.unshift(action.payload)
        },
    }
})


export const {addMessage,} = chartSlice.actions;
export default chartSlice.reducer;