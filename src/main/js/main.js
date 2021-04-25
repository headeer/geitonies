import React, {useEffect} from 'react';
import monitor from "../../assets/monitor.svg";
import phone from "../../assets/phone.svg";
import arrow from "../../assets/arrow-right-button.svg";
import trapeze from "../../assets/trapeze.svg";
import birds from "../../assets/birds-reverse.svg";
import logo from "../../assets/logo-main.svg";
import Image from "./shared/image";
import {useHistory} from "react-router-dom";

const Main = (props) => {
    useEffect(() => {
        const nav = document.querySelector('nav');
        nav.style.zIndex = '-12';
    }, [props.location]);
    let history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }
    return (
        <div className="main">
            <div className="top-content">
                <h2><span className="bold">Γειτονιες FIX</span> Microsite design</h2>
                <p className="text">This is a prototype to preview the “γειτονιές Φιξ” microsite, in the following
                    resolutions.
                    Logo icon always redirects to this Info screen
                </p>
                <p className="text-small">
                    Note: For better viewing in full screen mode, adjust your browser’s window ratio so you can only
                    see
                    the
                </p>
            </div>

            <div className="rows">
                <div className="row-1">
                    <Image img={monitor}></Image>
                    <p className="text bold"> Desktop 1920</p>
                    <p className="text">
                            <span className="bold "><span
                                className="underline">Landing Page</span> active clicks:</span><br/>
                        All navigation buttons & hover Neo Psychiko Pin to see the interactions
                    </p>
                    <p className="text">
                        <span className="bold"><span className="underline">Map Page</span> active clicks:</span><br/>
                        All navigation buttons & hover Neo Psychiko Pin to see the interactions
                    </p>

                    <p className="text">
                        Open / close the “+” button and add a change
                        cheat sheet: add “λιγότερα γράφιτι” by clicking it - <span className="underline">in development will be drag
                        and drop</span><br/>
                        By clicking the added pin you can edit it again. Confirm your choices and
                        complete the form.
                    </p>
                    <p className="text">
                        <span className="underline">Active Info Pages:</span><br/>
                        Limited edition Product page, Gifts page, FIX Park page and Stats page
                        All accessed though the bottom left navigation! <span className="bold">Its behavior will be explained!</span>
                    </p>
                    <button type="button" className="white-button" onClick={goToHome}>
                        Let's start! <Image img={arrow}></Image>
                    </button>
                </div>
                <div className="row-2">
                    <Image img={phone}></Image>
                    <p className="text bold margin-lef"> Mobile 375</p>

                    <button type="button" className="white-button" onClick={goToHome}>
                        Let's start!<Image img={arrow}></Image>
                    </button>
                </div>
                <div className="row-3">
                    <div className="birds">
                        <Image img={birds}></Image>

                    </div>
                    <div className="trapeze">
                        <Image img={trapeze}></Image>
                    </div>
                    <div className="logo-right-corner">
                        <Image img={logo}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
