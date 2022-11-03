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
            <div className="d-flex flex-row justify-content-between align-items-end">
                <h1 className="display-4 d-flex m-auto mt-3">
                    {props.todos.length && "You currently have these task to do:" || "You don't have tasks now, relax"}
                </h1>
                <Button id="new_task_tiny" variant="light" onClick={props.handleNewTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </Button>
            </div>
            <Accordion className="todos-accordion mt-3" defaultActiveKey="0">
                {console.log("Ready to render 'Todo' with props :", props.todos[0])}
                { props.todos.map((todo, i) => (
                        <TodoScene
                            key = {i}
                            _key = {i}
                            title = {props.todos[i].title}
                            date = {props.todos[i].date}
                            description = {props.todos[i].description}
                            handleCompleteTask = {props.handleCompleteTask}
                            handleEditTask = {props.handleEditTask}
                            handleDeleteTask = {props.handleDeleteTask} 
                        />
                    ))
                }
            </Accordion>
            <Button id = "new_task" variant = "light" onClick={props.handleNewTask}>+ New</Button>
        </Container>
    );
}