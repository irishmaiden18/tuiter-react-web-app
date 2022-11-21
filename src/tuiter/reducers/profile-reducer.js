import { createSlice } from "@reduxjs/toolkit";
import profileInfo from "../data/profile.json";

const profileSlice = createSlice({
                                 name: "profile",
                                 initialState: profileInfo,
                                 reducers: {
                                     updateProfile(state, action) {
                                            state.firstName = action.payload.profile.firstName
                                            state.lastName = action.payload.profile.lastName
                                            state.bio = action.payload.profile.bio
                                            state.location = action.payload.profile.location
                                            state.website = action.payload.profile.website
                                            state.dateOfBirth = action.payload.profile.dateOfBirth
                                     }
                                 }
                             });

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;