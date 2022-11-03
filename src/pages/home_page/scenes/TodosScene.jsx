import React, {useEffect} from 'react';
import Accordion from "react-bootstrap/Accordion"
import {Button, Container} from "react-bootstrap"
import TodoScene from "./Todo.jsx"
import "../../../css/style.css"

export default function TodosScene(props){

    useEffect(() => {
        console.log("Render component 'TodosScene', it's props : ")
        console.table(props);
        console.log("Todos : ");
        console.log(props.todos);
    }, [props.todos]);

    return (
        <Container>
            <h1 className="display-4 d-flex m-auto mt-3">{props.todos.length && "You currently have these task to do:" || "You don't have tasks now, relax"}</h1>
            <Accordion className="todos-accordion mt-3" defaultActiveKey="0">
                {console.log("Ready to render 'Todo' with props :", props.todos[0])}
                <TodoScene
                    key = {0}
                    _key = {0}
                    title = {props.todos[0].title}
                    date = {props.todos[0].date} 
                    description = {props.todos[0].description}
                    handleCompleteTask = {props.handleCompleteTask}
                    handleEditTask = {props.handleEditTask}
                    handleDeleteTask = {props.handleDeleteTask} 
                />
            </Accordion>
            <Button id = "new_task" variant = "light" onClick={props.handleNewTask}>+ New</Button>
        </Container>
    );
}