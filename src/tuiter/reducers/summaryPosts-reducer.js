import { createSlice } from "@reduxjs/toolkit";
import summaryPosts from "../data/summaryPosts.json";

const summaryPostsSlice = createSlice({
                                   name: "summaryPosts",
                                   initialState: summaryPosts
                               });

export default summaryPostsSlice.reducer;