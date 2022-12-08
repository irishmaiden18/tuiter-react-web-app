import axios from 'axios';

//location of HTTP services
const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {}//professor told me not to implement it
export const updateTuit = async (tuit) => {}//professor told me not to implement it

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