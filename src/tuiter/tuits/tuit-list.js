import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {


    //get 'tuits' & 'loading flag' from reducer
    const {tuits, loading} = useSelector(state => (state.tuitsData));


    //assign a reference to the dispatch FUNCTION, from the Redux store, to a variable: 'dispatch'
    //*----note: 'useDispatch()' returns a FUNCTION that will later be used to 'dispatch' the action
    const dispatch = useDispatch();

    //manages 'side-effects in functional React components
    //side-effects = any functional component not DIRECTLY used to calculate the output value
    //useEffect(callback[, dependencies]); where
    //---callback = function containing the 'side-effect' logic, executed right after changes are pushed to DOM
    //---dependencies = an OPTIONAL array of 'dependencies', callback only executes when dependencies have changed
    //when dependencies
                    //--are NOT provided = 'side-effect' runs EVERY rendering
                    //--are an EMPTY array '[]' = 'side-effect' runs ONCE after the INITIAL rendering
                    //--have 'props' or 'state values' (in an ARRAY), 'side-effect' runs ONLY when a 'dependency' value changes, can be ANY value
    //On component load, invoke the 'findTuitsThunk' to fetch tuits and put them in the reducer's store
    //We can extract fetched 'tuits' from reducer's store, using 'useSelector(), & render them here
    useEffect(() => {dispatch(findTuitsThunk())}, [])

    const  tuitsArray = useSelector(state => (state.tuitsData));
    //console.log(JSON.stringify(tuitsArray, null, 4))


    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                //'map()' creates a new array by performing a function on each array element, does
                //NOT execute the function for array elements without values, does NOT change
                //original array
                tuitsArray.tuits.map(tuit =>
                                   <TuitItem
                                       key={tuit._id}
                                       tuit={tuit}
                                   />
                )
            }
        </ul>
    );
};

export default TuitsList;