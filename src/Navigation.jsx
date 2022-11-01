import todo_logo from './assets/todo_logo.svg';
import TodosComponent from "./pages/home_page/components/todo_component.jsx"
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import "./css/nav_style.css";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src = {todo_logo}/> Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to = "/">Task list</Link>
            <Link className="nav-link" to = "/about">About</Link>
            <Link className="nav-link" to = "/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
