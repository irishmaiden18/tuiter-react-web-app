import {createSlice} from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk,
} from "../../services/tuits-thunks";

//*----note: loading = loading flag that decides whether to display a spinner or not

//initial state has no tuits
const initialState = {
    tuits: [],
    loading: false
}

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

                                   name: 'tuits',
                                   initialState, //the same as 'initialState' : 'initialState'

                                   //all reducers in 'extraReducers' = asynchronous reducers
                                   extraReducers: {

                                       //if request is not yet fulfilled ...
                                       [findTuitsThunk.pending]:
                                           (state) => {

                                               //'state.loading' = true => UI displays a spinner
                                               state.loading = true

                                               //'state.tuits' = [] b/c tuits are still being
                                               // fetched from server
                                               state.tuits = []
                                           },

                                       //if request has server response, request is fulfilled ...
                                       [findTuitsThunk.fulfilled]:

                                       //extract/destruct payload from action object 'payload'
                                       //'payload' contains 'tuits' from server
                                           (state, {payload}) => {

                                               //'state.loading' = false b/c already have data
                                               //from server
                                               //UI does NOT display spinner
                                               state.loading = false;

                                               //update redux state w/ 'tuits' from server
                                               state.tuits = payload
                                           },

                                       //if request has server response, request is fulfilled ...
                                       [deleteTuitThunk.fulfilled]:

                                       //extract/destruct payload from action object 'payload'
                                       //'payload' contains 'tuit' ID to remove sent by server
                                           (state, {payload}) => {

                                               //'state.loading' = false b/c already have data
                                               //from server (id of 'tuit' to delete)
                                               //UI does NOT display spinner
                                               state.loading = false

                                               //filters out the 'tuit' w/ ID that matches the ID
                                               //to delete sent from server----????filter out tuits
                                               //that don't match, right?
                                               state.tuits =
                                                   state.tuits.filter(t => t._id !== payload)
                                           },

                                       [createTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false;
                                               state.tuits.unshift(payload)
                                           },

                                       [updateTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false;
                                               const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...payload
                                               }
                                           },
                                       //if request times out or responds w/ error
                                       [findTuitsThunk.rejected]:

                                           (state) => {

                                               //could use a separate flag to report errors
                                               //un-tracked atm

                                               //set 'state.loading' flag = false b/c know can't
                                               //get tuits from server
                                               //UI does NOT display spinner
                                               state.loading = false
                                           },

                                       //Not going to use these anymore
                                       reducers: {

                                           deleteTuit(state, action) {
                                               const index = state.findIndex(
                                                   tuit => tuit._id === action.payload);
                                               state.splice(index, 1);
                                           },

                                           // createTuit(state, action) {
                                           //     state.unshift({
                                           //                       ...action.payload,
                                           //                       ...templateTuit,
                                           //                       _id: (new Date()).getTime(),
                                           //                   })
                                           // }
                                       },
                                   }
                               }
)

//export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;