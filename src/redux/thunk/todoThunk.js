import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("getTodos", async () => {
    const apiRes = await axios.get("https://dummyjson.com/todos")

    return apiRes.data.todos
})