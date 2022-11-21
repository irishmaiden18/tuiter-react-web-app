import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.svg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 5,
    "likes": 10,
}

const tuitsSlice = createSlice({
                                   name: "tuits",
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state.findIndex(tuit => tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         })
                                       }
                                   }
                               });
console.log(tuitsSlice);
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;