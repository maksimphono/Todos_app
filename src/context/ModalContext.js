import {createContext} from 'react'
import {store} from "../store.js";
import {actions} from "./ModalSlice.js";

export default createContext({
    actions
});