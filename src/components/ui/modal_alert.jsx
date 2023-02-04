import {Modal, Button, ButtonGroup} from "react-bootstrap"
import {memo, React, useContext} from "react"
import ModalContext from "../../context/ModalContext";
import { useDispatch, useSelector } from "react-redux";

function ModalScene(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.modal);

    return (
        <Modal show={state.show} onHide={() => dispatch(actions.hideModal)}>
            <Modal.Header closeButton>
                <Modal.Title>{state.title || "Warning!"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{state.body}</Modal.Body>
            <Modal.Footer>
                {state.buttons}
                {state.closeButton && <Button variant = "secondary" onHide={() => dispatch(actions.hideModal)}>Close</Button>}
            </Modal.Footer>
        </Modal>
    )
}

export default memo(ModalScene);