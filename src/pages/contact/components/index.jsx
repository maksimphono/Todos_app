//import {Modal, Button, ButtonGroup, Form} from "react-bootstrap"
import {React} from "react"
import {Container, Form, Button, FormGroup} from "react-bootstrap";
import "../../../css/contact_style.css";

export default function Contact (props){
    return (
        <Container>
            <h1 className = "display-5 mt-3">Contact developer</h1>
            <Form action="mailto:trukhinmaksimof@mail.ru" method="post" enctype="text/plain">
                <h2>Send email:</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h4>Your message:</h4></Form.Label>
                    <Form.Control controlId="send_email_text" as="textarea" placeholder="Hello" />
                    <Button variant="primary" className="mt-3" type="submit">Send</Button>
                </Form.Group>
            </Form>
        </Container>
    );
}