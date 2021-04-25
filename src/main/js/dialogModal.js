import {Modal} from "react-bootstrap";
import React from "react";
import arrow from "../../assets/arrowRight.svg";
import Image from "./shared/image";
import curvedArrow from "../../assets/curver-arrow.svg";

class DialogModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openModal: false};
    }

    componentWillMount() {
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseAndOpenNextStep = this.handleCloseAndOpenNextStep.bind(this);
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

    handleCloseAndOpenNextStep() {
        if (this.props.class !== "dialog2") {
            this.setState(() => ({
                openModal: false,
                openDialog: true
            }));
        } else {
            this.setState(() => ({
                openModal: false,
                openDialog: false
            }));
        }
    }

    nothing() {
    }

    render() {
        return (
            <>
                {this.state.openDialog && <DialogModal class='dialog2' title="Lorem Ipsum" bodyText="Βήμα πρώτο:
                        Πλοηγήσου στον
                        χάρτη της Ελλάδας
                        και βρες τη γειτονιά
                        που θέλεις να
                        ομορφύνεις">
                </DialogModal>}
                <Modal className={this.props.class + ' modal-dialog'} size="sm"
                       aria-labelledby="contained-modal-title-vcenter"
                       show={this.state.openModal}
                       centered onHide={this.nothing}>
                    <Modal.Body>
                        <h4>{this.props.title}</h4>
                        {this.props.bodyText}
                    </Modal.Body>
                    <Modal.Footer>
                        <span onClick={this.handleClose}>Skip</span>
                        <div onClick={this.handleCloseAndOpenNextStep}>
                            Επόμενο Tip <Image img={arrow}></Image>
                        </div>
                    </Modal.Footer>
                    {this.props.class === "dialog2" && <div className="bottom-info">
                        <h5>ετοιμος;</h5>
                        <div className="blue-container">
                            <p>Καταχώρισε τις επιλογές σου
                                και μπες στην κλήρωση!</p>
                            <Image img={curvedArrow}>
                            </Image>
                        </div>
                    </div>}
                </Modal>

            </>
        );
    }
}

export default DialogModal;
