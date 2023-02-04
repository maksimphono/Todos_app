import {createSlice} from "@reduxjs/toolkit";

const ModalSlice = createSlice({
    name : "modal",
    initialState : {
        show : false, title : "", body : null, buttons : []
    },
    reducers : {
        toggleModal : state => state.show = !state.show,
        showModal : state => state.show = true,
        hideModal : state => state.show = false,
        setModalTitle : (state, action) => state.title = action.payload,
        setModalBody : (state, action) => state.body = action.payload,
        setModalButtons : (state, action) => state.title = action.payload,
    }
});

//export const {toggleModal, showModal, hideModal, setModalBody, setModalTitle, setModalButtons} = ModalSlice.actions;
export const actions = ModalSlice.actions;

export default ModalSlice.reducer;