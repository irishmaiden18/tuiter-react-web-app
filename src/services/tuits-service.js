import axios from 'axios';

//location of HTTP services
const TUITS_API = 'http://localhost:4000/api/tuits';

//retrieves all the tuits from the server
//'response.data' = 'tuits' array sent back from 'findTuits' in 'tuits-controller.js' in node app
//                = 'tuits' array embedded in response's 'data' property
//findTuits = asynchronous (known b/c of 'async' keyword after '=' sign), means response is sent
//back when request resolves from server
export const findTuits  = async () => {

    //send HTTP GET request to 'TUITS_API' using 'axios.get()'
    //request = asynchronous (notice 'await' keyword)
    const response = await axios.get(TUITS_API);

    //extract JSON data (aka 'tuits' array) from response from server
    const tuits = response.data;

    return tuits;

}

//deleteTuit = asynchronous (known b/c of 'async' keyword after '=' sign), means response is sent
//back when request resolves from server
//deletes a 'tuit' w/ a particular 'tid' (aka removes 'tuit' from 'tuits' array)
export const deleteTuit = async (tid) => {

    //send HTTP 'DELETE' request to server & append tuit's ID (aka 'tid') to URL
    const response = await axios.delete(`${TUITS_API}/${tid}`)

    //'response.data' contains 'response's status --Professor = ignore for now
    return response.data
}

export const createTuit = async (tuit) => {

    //embed the 'tuit' parameter in the BODY of the HTTP request, then POST it to TUITS_API
    const response = await axios.post(TUITS_API, tuit);

    //'response.data' contains new 'tuit' (including: ID, & initial default values:
    //'likes' = 0 & 'liked' = false)
    return response.data;
}

//service function accepts 'tuit' to send server
export const updateTuit = async (tuit) => {

    //send HTTP PUT request appending 'tuit''s ID to URL, and embed 'tuit' object in BODY
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);

    //return tuit update to update in reducer's state's store
    return tuit;
}