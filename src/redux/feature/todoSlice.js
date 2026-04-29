import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../thunk/todoThunk";


const initialState = {
    items : [],
    loading: false,
    error : null
}

const todoSlice = createSlice({
    name : "todo",
    initialState,

    reducers:{},

extraReducers:(buidler) =>{
    buidler

    .addCase(getTodos.pending, (state) => {
        state.loading = true
    }) 
    .addCase(getTodos.fulfilled, (state,action) => {
        console.log(action.payload)
        state.items = action.payload
        state.loading = false
    }) 
    .addCase(getTodos.rejected, (state) => {
        state.loading = false
        state.error ="Error agiyaaa...."
    }) 
}

})

// export const {} = todoSlice.action
export default todoSlice.reducer