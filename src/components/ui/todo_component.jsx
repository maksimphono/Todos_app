import {useState, useEffect, useCallback, memo} from "react";
import TodosScene from "../../../pages/home_page/scenes/TodosScene.jsx"
import ModalAlert from "./modal_alert.jsx"
import Modal_NewTask from "./Modal_NewTask.jsx"
import Modal_UpdateTask from "./Modal_UpdateTask.jsx"
import GET_all_tasks from "../../../pages/home_page/forms/GET_all_tasks.js"
import DELETE_task_by_id from "../../../pages/home_page/forms/DELETE_task_by_id.js"
import {modalComplete, modalDelete, modalDeleteSuccess} from "./alert_modals.js"
import $ from "jquery";

export default memo(function Todos(props){
    const [todos, setTodos] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [modal, setModal] = useState({title : "Warning", body : "", buttons : []});
    const [newTask, setNewTask] = useState(false);
    const [updateTask, setUpdateTask] = useState({show : false, todoIndex : 0, title : "", description : ""});

    useEffect(() => {
        console.log("todos : ", todos);
        if (todos != null) {
            console.log("todos[0] :", todos[0]);
            if (todos[0] != null)
                console.log("todos[0].title : ", todos[0].title);
        }

        setTodos(GET_all_tasks(null));
    }, []);

    const handleCompleteTask = event => {
        const data = {
            todoIndex : $(event.target).attr("data-todo-index")
        };
        DELETE_task_by_id(data);
        setModal(modalComplete(event));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1500);
        setTodos(GET_all_tasks(null));
    };

    const handleNewTask = useCallback((event) => {
        event.preventDefault();
        setNewTask(true);
    }, [newTask]);

    const handleEditTask = event => {
        const todoIndex = $(event.target).attr("data-todo-index")
        console.log("Index to edit :", todoIndex);
        setUpdateTask({
            show : true,
            todoIndex : todoIndex,
            title : todos[todoIndex].title, 
            description : todos[todoIndex].description
        });
    };

    const handleDeleteTask = event => {
        const data = {
            todoIndex : $(event.target).attr("data-todo-index")
        }
        DELETE_task_by_id(data);
        setModal(modalDeleteSuccess(event));
        setTimeout(() => setShowAlert(false), 1500);
        setTodos(GET_all_tasks(null));
    };

    const handleDeleteWarning = useCallback(event => {
        setModal(
            modalDelete(
                event, handleCompleteTask, handleDeleteTask
            )
        );
        setShowAlert(!showAlert);
    }, [showAlert]);

    const handleModalShowHide = useCallback(event => {
        setShowAlert(!showAlert);
    }, [showAlert]);

    return (
        <>
        <TodosScene 
            todos = {todos}
            handleNewTask = {handleNewTask}
            handleCompleteTask = {handleCompleteTask}
            handleEditTask = {handleEditTask}
            handleDeleteTask = {handleDeleteWarning}
        />
        <ModalAlert
            show = {showAlert}
            title={modal.title}
            buttons = {
                modal.buttons
            }
            body = {modal.body}
            handleShowHide = {handleModalShowHide}
        >
        </ModalAlert>
        <Modal_NewTask
            show = {newTask}
            handleShowHide = {(e) => setNewTask(false)}
        />
        <Modal_UpdateTask
            show = {updateTask.show}
            title = {updateTask.title}
            description = {updateTask.description}
            todoIndex = {updateTask.todoIndex}
            handleShowHide = {(e) => setUpdateTask(false)}
        />
        </>
    );
})