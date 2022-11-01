//import {Modal, Button, ButtonGroup, Form} from "react-bootstrap"
import {React} from "react";
import {Container, Button, ButtonGroup} from "react-bootstrap";
import "../../../css/about_stile.css";

export default function About (props){
    return (
        <Container>
            <section>
                <h1 className="display-5 mt-3">About app:</h1>
                <p>
                    This is simple application, that can help user to maintain daily tasks.<br/>
                    If you have task to do, just click <Button variant="secondary">+ New</Button> button, then name and describe your task.<br/>
                    After that task with current date will be added to tasks table. You can <b>complete</b>, <b>edit</b> and <b>delete</b> task by clicking corresponding buttons
                    <ButtonGroup><Button variant="success">Complete</Button><Button variant="primary">Edit</Button><Button variant="" className="btn btn-outline-danger">Delete</Button></ButtonGroup>
                    The app use <b>local storage</b> in your browser to store data about tasks, so if you change device, you will not be able to see your tasks.
                </p>
            </section>
            <section>
                <h1 className="display-5 mt-3">About developer:</h1>
                <p>
                    Hi. My name is Maksim, i'm junior front end developer from Russia.<br/>
                    This simple application is my university project. I hope it will be usefull for you.<br/>
                    If it was, or you have any suggestions, you can send me a message by link <b>"Contact"</b> upper in navigation bar.<br/>
                    Thank you for using my app.&#128513;
                </p>
            </section>
        </Container>
    );
}
