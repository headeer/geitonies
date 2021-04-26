import {Form, Modal} from "react-bootstrap";
import React from "react";
import Image from "./shared/image";
import logo1 from "../../assets/logo-1.svg";
import logo2 from "../../assets/logo-2.svg";
import logo3 from "../../assets/logo-3.svg";

class ModalLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            email: '',
            name: '',
            checkbox: '',
            checkbox2: '',
            formErrors: {email: '', password: '', checkbox: false, checkbox2: false},
            emailValid: false,
            nameValid: false,
            checkboxValid: false,
            checkboxValid2: false,
            formValid: false
        };
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

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value || e.target.checked;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    sendDataToBackend() {
        fetch('APIADRESS', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }
                .then((result) => {
                    console.log(result)
                })
        }).then(() => {console.log('success'); return this.handleClose()});
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let checkboxValid = this.state.checkboxValid;
        let checkboxValid2 = this.state.checkboxValid2;
        console.log(fieldName, value);
        switch (fieldName) {
            case 'email':
                emailValid = value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : '';
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                console.log(value);
                nameValid = value && value.length >= 2 ? true : '';
                fieldValidationErrors.password = nameValid ? '' : ' is too short';
                break;
            case 'checkbox':
                checkboxValid = value;
                fieldValidationErrors.checkbox = checkboxValid ? '' : ' you need to check checkbox';
                break;
            case 'checkbox2':
                checkboxValid2 = value;
                fieldValidationErrors.checkbox2 = checkboxValid2 ? '' : ' you need to check checkbox';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            checkboxValid: checkboxValid,
            checkboxValid2: checkboxValid2
        }, this.validateForm);
    }

    validateForm() {
        console.log(this.state.emailValid, this.state.nameValid,this.state.checkboxValid ,this.state.checkboxValid2);
        this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.checkboxValid && this.state.checkboxValid2});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
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
                            <Form.Group controlId="formBasicName" className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                                <Form.Check type="text" required placeholder="Ονοματεπώνυμο" name="name"
                                            value={this.state.name} onChange={(event) => this.handleUserInput(event)}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                                <Form.Control type="email" required placeholder="Enter email" name="email"
                                              value={this.state.email}
                                              onChange={(event) => this.handleUserInput(event)}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" className={` checkboxform-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                                <Form.Check type="checkbox" required label="Αποδοχή όρων συμμετοχής" name="checkbox"
                                            value={this.state.checkbox}
                                            onChange={(event) => this.handleUserInput(event)}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox2" className={`checkbox form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                                <Form.Check type="checkbox" required label="Είμαι άνω των 18." name="checkbox2"
                                            value={this.state.checkbox2}
                                            onChange={(event) => this.handleUserInput(event)}/>
                            </Form.Group>
                            <FormErrors formErrors={this.state.formErrors}/>
                            <button className="btn" type="submit" onClick={this.sendDataToBackend}
                                    disabled={!this.state.formValid}>
                                Πάρε μέρος!
                            </button>
                            <a href="#" onClick={this.handleClose}>Ακύρωση</a>
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
export const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>
