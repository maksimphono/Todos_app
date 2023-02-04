import {configureStore} from "@reduxjs/toolkit";
import ModalReducer from "./context/ModalSlice.js";

const store = configureStore({
    reducer : {
        modal : ModalReducer
    }
})

export default store;