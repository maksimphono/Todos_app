import TodosComponent from "./components/ui/todo_component.jsx"
import AboutComponent from "./pages/about/components/index.jsx"
import ContactComponent from "./pages/contact/components/index.jsx"
import Layout from "./pages/Layout.jsx";
import {HashRouter, Routes, Route} from "react-router-dom";
import { useState, useContext } from "react";
import store from "./store.js";
import {Provider, useDispatch, useSelector } from "react-redux";
import Modal from "./components/ui/modal_alert.jsx";
import {showModal, setModalTitle, toggleModal} from "./context/ModalSlice.js";
import { Button } from "react-bootstrap";

function Base() {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);

  return (
    <>
      <Modal />
      <Button onClick = {() => (dispatch(showModal()), dispatch(setModalTitle("qwerty")))}>Modal</Button>
    </>
  )
    
}

function App() {
  return (
    <Provider store = {store}>
      <Base />
    </Provider>
    
  );
}
/*
<HashRouter>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route index element = {<TodosComponent />} />
            <Route path="/about" element = {<AboutComponent />} />
            <Route path="/contact" element = {<ContactComponent />} />
          </Route>
        </Routes>
      </HashRouter>
*/

export default App;
