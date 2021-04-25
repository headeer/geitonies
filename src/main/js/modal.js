import {Modal} from "react-bootstrap";
import React from "react";
import Image from "./shared/image";
import arrow from "../../assets/arrowRight.svg";
import DialogModal from "./dialogModal";

class ModalWithText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openModal: false, openDialog: false};


    }

    componentWillMount() {
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handeCloseAndOpenNextStep = this.handeCloseAndOpenNextStep.bind(this);
        this.handleShow();

    }

    handleShow() {
        this.setState(() => ({
            openModal: true
        }));
    }

    handleClose() {
        this.setState(() => ({
            openModal: false
        }));
    }

    handeCloseAndOpenNextStep() {
        this.setState(() => ({
            openModal: false,
            openDialog: true
        }));
    }

    nothing() {
    }

    render() {
        return (

            <>
                {this.state.openDialog && <DialogModal title="Lorem Ipsum" bodyText="Βήμα πρώτο:
                        Πλοηγήσου στον
                        χάρτη της Ελλάδας
                        και βρες τη γειτονιά
                        που θέλεις να
                        ομορφύνεις" class="dialog">
                </DialogModal>}
                <Modal className="modal-text" size="lg" aria-labelledby="contained-modal-title-vcenter"
                       show={this.state.openModal}
                       centered onHide={this.nothing}>
                    <Modal.Body>Βήμα πρώτο:
                        Πλοηγήσου στον
                        χάρτη της Ελλάδας
                        και βρες τη γειτονιά
                        που θέλεις να
                        ομορφύνεις <br/><span onClick={this.handleClose}>Skip</span></Modal.Body>
                    <Modal.Footer>
                        <div onClick={this.handeCloseAndOpenNextStep}>
                            Επόμενο Tip <Image img={arrow}></Image>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalWithText;
