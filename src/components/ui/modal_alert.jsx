import {Modal, Button, ButtonGroup} from "react-bootstrap"
import {memo, React, useContext} from "react"
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../context/ModalSlice";

function ModalScene(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.modal);

    return (
        <Modal show={state.show} onHide={() => dispatch(hideModal())}>
            <Modal.Header closeButton>
                <Modal.Title>{state.title || "Warning!"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{state.body}</Modal.Body>
            <Modal.Footer>
                {state.buttons}
                {state.closeButton && <Button variant = "secondary" onClick={() => dispatch(hideModal())}>Close</Button>}
            </Modal.Footer>
        </Modal>
    )
}

export default memo(ModalScene);