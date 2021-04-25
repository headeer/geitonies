import React from 'react';
import Image from './shared/image';
import headerLogo from '../../assets/header-logo.svg';
import beer from '../../assets/home-image.svg';
import {useHistory} from "react-router-dom";
import hand from "../../assets/home/wing-top.svg";
import handBottom from "../../assets/home/wing-bottom.svg";
import birds from "../../assets/home/birds.svg";
import chickenLeaves from "../../assets/home/chicken-leaf.svg";
import text from "../../assets/home/text.svg";
import lampShop from "../../assets/home/lamp-shop.svg";
import leavesText from "../../assets/home/leafs-text.svg";
import lamp from "../../assets/main-info-page/lamp.svg";


const HomeDesktop = () => {
    let history = useHistory();
    const handleClick = () => {
        const handTop = document.querySelector('.hand-top-desktop');
        const handBottom = document.querySelector('.hand-bottom-desktop');
        handTop.style.transform = "translateY(-51%)";
        handTop.style.transition = "all 0.5s ease-in-out";
        handBottom.style.transform = "translateY(51%)";
        handBottom.style.transition = "all 0.5s ease-in-out";
        setTimeout(() => {
            history.push("/map");
        }, 500);
    }
    return (
        <div className="home-page-desktop">
            <div className="row-1">
                <div className="birds">
                    <Image img={birds}></Image>
                </div>
                <div className="lamp">
                    <Image img={lampShop}></Image>
                </div>
            </div>
            <div className="row-2">
                <div className="hand-top hand-top-desktop">
                    <Image img={hand}>
                    </Image>
                </div>
                <div className="container diamond-shape shape-3">
                    <div className="item-count">
                        <header>
                            <Image img={headerLogo}>
                            </Image>
                        </header>
                        <p className="text">
                            Πες μας ιδέες για το πως μπορεί να γίνει η γειτονιά σου καλύτερη! Κι έτσι στο μέλλον, μπορεί να
                            κερδίσει η γειτονιά, αλλά σήμερα θα κερδίσεις εσύ!
                            Μπες στον διαγωνισμό και διεκδίκησε
                            ΕΚΔΡΟΜΕΣ ΣΕ ΟΛΗ ΤΗΝ ΕΛΛΑΔΑ
                            ΜΕ ΑΡΩΜΑ ΤΡΟΥ ΛΟΚΑΛ!
                        </p>
                        <button type="button" onClick={handleClick}>
                            Λάβε μέρος
                        </button>
                        <Image img={beer}></Image>
                    </div>
                </div>
                <div className="hand-bottom hand-bottom-desktop">
                    <Image img={handBottom}>
                    </Image>
                </div>
            </div>
            <div className="row-3">
                <div className="text-image">
                    <Image img={text}></Image>
                </div>
                <div className="text-leaves">
                    <Image img={leavesText}></Image>
                </div>
                <div className="chicken-leaves">
                    <Image img={chickenLeaves}></Image>
                </div>
            </div>
            <div className="background">
            </div>
        </div>
    );
}
export default HomeDesktop;
