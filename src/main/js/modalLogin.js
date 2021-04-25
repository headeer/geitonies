import {Form, Modal} from "react-bootstrap";
import React from "react";
import Image from "./shared/image";
import logo1 from "../../assets/logo-1.svg";
import logo2 from "../../assets/logo-2.svg";
import logo3 from "../../assets/logo-3.svg";

class ModalLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openModal: false};
    }

    componentWillMount() {
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
        this.props.onClick();
    }

    render() {
        return (

            <>

                <Modal className="modal-login" size="lg" aria-labelledby="contained-modal-title-vcenter"
                       show={this.state.openModal}
                       centered onHide={this.handleClose}>
                    <Modal.Title>
                        ΟΛΟΚΛΗΡΩΣΕ ΤΗΝ ΣΥΜΜΕΤΟΧΗ ΣΟΥ ΣΤΟ ΔΙΑΓΩΝΙΣΜΟ
                    </Modal.Title>
                    <Modal.Body><p>Συμπλήρωσε τα στοιχεία σου και πάρε μέρος στην κλήρωση για να κερδίσεις εκδρομές -
                        εμπειρία με περιηγήσεις από Τρου Λόκαλς και όχι μόνο!</p>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Check type="text"  placeholder="Ονοματεπώνυμο" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" className="checkbox">
                                <Form.Check type="checkbox" label="Αποδοχή όρων συμμετοχής" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox2" className="checkbox">
                                <Form.Check type="checkbox" label="Είμαι άνω των 18." />
                            </Form.Group>
                            <button className="btn" type="submit" onClick={this.handleClose}>
                                Πάρε μέρος!
                            </button>
                            <a href="#">Ακύρωση</a>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            <Image img={logo1}>
                            </Image>
                            <Image img={logo2}>
                            </Image>
                            <Image img={logo3}>
                            </Image>
                        </div>
                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default ModalLogin;
