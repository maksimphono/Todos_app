import TodosComponent from "./pages/home_page/components/todo_component.jsx"
import AboutComponent from "./pages/about/components/index.jsx"
import ContactComponent from "./pages/contact/components/index.jsx"
import Navigation from "./Navigation"
import Layout from "./pages/Layout.jsx";
//import TodosComponent from "./pages/home_page/components/todo_component.jsx"
import {HashRouter, Routes, Route} from "react-router-dom";
//import './App.css';

function App() {
  // return (
  //   <>
  //     <header>
  //       <Navigation></Navigation>
  //     </header>
  //     <TodosComponent></TodosComponent>
  //   </>
  // );
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element = {<TodosComponent />} />
          <Route path="/about" element = {<AboutComponent />} />
          <Route path="/contact" element = {<ContactComponent />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
