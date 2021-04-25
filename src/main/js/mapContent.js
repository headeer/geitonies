import React from 'react';
import Image from "./shared/image";
import plus from "../../assets/plus-icon.svg";
import close from "../../assets/ex-icon.svg";
import ModalWithText from "./modal";
import curvedArrow from "../../assets/curver-arrow.svg";
import ModalLogin from "./modalLogin";

class MapContent extends React.Component {
    constructor(props) {
        super(props);
        let openInit = false;
        if (window.innerWidth > 600) {
            openInit = true;
        }
        this.state = {open: openInit, openModal: false, openLoginPage: false};
        this.openSidebar = this.openSidebar.bind(this);

    }

    componentDidMount() {
        this.setState(() => ({
            openModal: true
        }));
        this.openLogin = this.openLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);

    }

    openSidebar() {
        const isContaining = document.querySelector('.map-container').classList.contains('open');
        if (!isContaining && this.state.open) {
            this.setState((state) => ({
                open: !state.open
            }));
            setTimeout(() => {
                this.setState((state) => ({
                    open: !state.open
                }));
            }, 0)

        } else {
            this.setState((state) => ({
                open: !state.open
            }));
        }
        if (window.innerWidth < 600) {
            nav.style.opacity = this.state.open ? '1' : '0';
            nav.style.zIndex = this.state.open ? '1' : '-100';
        }
        const nav = document.querySelector('nav');

    }

    openLogin() {
        this.setState(() => ({
            openLoginPage: true
        }));
    }

    closeLogin() {
        this.setState(() => ({
            openLoginPage: false
        }));
    }

    render() {
        return (
            <div className={this.state.open ? "map-container open" : "map-container"}>
                <ModalWithText open={this.state.openModal}>
                </ModalWithText>
                <div className="icon-plus" onClick={this.openSidebar}>
                    <Image img={plus}>
                    </Image>
                </div>
                <div className="sidebar">
                    <div className="icon-close" onClick={this.openSidebar}>
                        <Image img={close}>
                        </Image>
                    </div>
                    <div className='heading'>
                        <h1>Our locations</h1>
                    </div>
                    <div id='listings' className='listings'>
                        <h4>Καταχωρησε τις ιδεες και μπες στην κληρωση</h4>
                        <p>
                            Διάλεξε μία από τις παρακάτω ιδέες και σύρε το pin στο σημείο του χάρτη που θα ήθελες να
                            αλλάξει.
                        </p>
                    </div>
                </div>
                <div id="map" className="map">
                </div>
                {this.props.displayInfo && <div className="bottom-info" onClick={this.openLogin}>
                    <h5>ετοιμος;</h5>
                    <div className="blue-container">
                        <p>Καταχώρισε τις επιλογές σου
                            και μπες στην κλήρωση!</p>
                        <Image img={curvedArrow}>
                        </Image>
                    </div>
                </div>}
                {this.state.openLoginPage && <ModalLogin onClick={this.closeLogin}>
                </ModalLogin>}
                <pre id="coordinates" className="coordinates"></pre>
            </div>
        );
    };
}

export default MapContent;
