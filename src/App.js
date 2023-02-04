import TodosComponent from "./pages/home_page/components/todo_component.jsx"
import AboutComponent from "./pages/about/components/index.jsx"
import ContactComponent from "./pages/contact/components/index.jsx"
import Layout from "./pages/Layout.jsx";
import {HashRouter, Routes, Route} from "react-router-dom";
import { useState, useContext } from "react";
import {store} from "./store.js";
import {Provider } from "react-redux";
import ModalContext from "./context/ModalContext.js";

function App() {
  const [showModal, setShowModal] = useState(false);
  //const {state, actions} = useContext(ModalContext);

  return (
    <Provider store = {store}>
      <HashRouter>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route index element = {<TodosComponent />} />
            <Route path="/about" element = {<AboutComponent />} />
            <Route path="/contact" element = {<ContactComponent />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
    
  );
}

export default App;
