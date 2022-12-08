//Redux's 'createAsyncThunk' function can wrap an asynchronous HTTP function so that the
//asynchronous HTTP function can interact with a Redux reducer to store data from a remote server
//in the local redux store
import {createAsyncThunk} from "@reduxjs/toolkit"

//import ALL exported functions as a group called 'service'
import * as service from "./tuits-service"

//create thunk for 'findTuits' w/ a unique name
export const findTuitsThunk = createAsyncThunk(

    //thunk invokes 'service' function & returns data in a redux action's payload
    'tuits/findTuits', async () => await service.findTuits()
)

//create thunk for 'deleteTuits' w/ unique thunk identifier
export const deleteTuitThunk = createAsyncThunk(

        //thunk invokes 'service' function & returns data in a redux action's payload
        //unique identifier for 'deleteTuit' thunk
        'tuits/deleteTuit',

        //wraps service method
        async (tuitId) => {

                        //service method
                        await service.deleteTuit(tuitId)

                        //return tuit ID =>
                        //tuit associated w/ 'tuitId' can be removed from reducer's store
                        return tuitId
    }
)