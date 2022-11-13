import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.svg",
};
console.log(currentUser)

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 5,
    "likes": 10,
}
console.log(templateTuit)

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
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
export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;