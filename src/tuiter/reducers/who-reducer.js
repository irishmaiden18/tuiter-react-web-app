import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
                                 name: "who",
                                 initialState: whoArray
                             });

console.log(whoSlice)
export default whoSlice.reducer;