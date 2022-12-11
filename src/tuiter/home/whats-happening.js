import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import "./index.css";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
    }
    return (
        <div className="row pe-0">
            <div className="col-2 mx-3">
                <img src="../images/nasa.svg" width="{100}" className="rounded-circle my-2 mx-auto
                            d-block img-fluid" alt=""/>
            </div>
            <div className="col-9 px-0">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0 px-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
               </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12 ms-3"><hr/></div>
        </div>
    );
}
export default WhatsHappening;