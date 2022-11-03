import React, {useEffect} from 'react';
import todo_icon from "../../../assets/todo_icon.svg";
import Accordion from "react-bootstrap/Accordion"
import {Button, ButtonGroup} from "react-bootstrap"
import "../../../css/todo_style.css"

export default function TodoScene(props){
    let date = props.date;
    date = `${date.match(/\d{4}-\d{2}-\d{2}/g)}  ${date.match(/\d{2}:\d{2}/)}`;

    useEffect(() => {
        console.log("Render component 'Todo' . It's props :");
        console.table(props);
    }, [props]);

    return (
        <Accordion.Item className="accordion-item" eventKey = {props._key}>
            <Accordion.Header>
                {console.log("Render process... (Accordion.Header)")}
                <div>
                    <div style={{display: "flex", flexDirection : "row"}}><img style={{height: "2rem", marginRight: ".7rem"}} src = {todo_icon}/><h2>{props.title || "New todo"}</h2></div>
                    <p>Since: {date}</p>
                </div>
                <ButtonGroup>
                    <Button variant="success" data-title={props.title} className = "btn" onClick={props.handleCompleteTask}>Complete</Button>
                    <Button variant="primary" data-todo-index={props._key} className = "btn" onClick={props.handleEditTask}>Edit</Button>
                    <Button variant="outline" data-todo-index={props._key} className = "btn-outline-danger" onClick={props.handleDeleteTask}>Delete</Button>
                </ButtonGroup>
            </Accordion.Header>
            <Accordion.Body>
                {console.log("Render process... (Accordion.Body)")}
                <h4>Description:</h4>
                <p>{props.description || "None"}</p>
            </Accordion.Body>
        </Accordion.Item>
    );
}