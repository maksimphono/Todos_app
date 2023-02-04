import {configureStore} from "@reduxjs/toolkit";
import ModalReducer from "context/ModalSlice.js";

const store = configureStore({
    reducers : {
        modal : ModalReducer
    }
})

export default store;