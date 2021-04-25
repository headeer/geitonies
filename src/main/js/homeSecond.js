import React from 'react';
import Image from './shared/image';
import homeLogo from '../../assets/home-second-logo.svg';
import beer from '../../assets/home-image.svg';
import {useHistory} from "react-router-dom";
import handBottom from "../../assets/hand-white-upside-down.svg";
import hand from "../../assets/hand-white.svg";
import HomeDesktop from "./homeDesktop";
import HomeInfoDesktop from "./homeInfoDesktop";

const HomeSecond = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/map");
    }
    return (
        <div className="home-page-second">
            <div className="desktop">
                <HomeInfoDesktop></HomeInfoDesktop>
            </div>
            <div className="mobile">
                <div className="hand-top">
                    <Image img={hand}>
                    </Image>
                </div>
                <header>
                    <Image img={homeLogo}>
                    </Image>
                </header>
                <p className="text">
                    Σε όποια γωνιά της Ελλάδας. κι αν
                    βρεθείς, θα τους δεις. Είναι οι “λόκαλ”.
                    Οι ντόπιοι, γεμάτοι συμβουλές και
                    ιστορίες που μόνο εκείνοι γνωρίζουν για
                    τον τόπο τους. Συνώνυμο
                    αυθεντικότητας, και διαχρονικότητας,
                    ακριβώς όπως η FIX Hellas, η πρώτη
                    ελληνική μπύρα. Εμπνεόμαστε από την
                    αλήθεια των ντόπιων και τους
                    αφιερώνουμε τις νέες συλλεκτικές
                    συσκευασίες Τρου Λόκαλ.
                </p>
                <button type="button" onClick={handleClick}>
                    Μάθε περισσότερα
                </button>
                <div className="beer">
                    <Image img={beer}>
                    </Image>
                </div>
                <div className="hand-bottom">
                    <Image img={handBottom}>
                    </Image>
                </div>
            </div>

        </div>
    );
}
export default HomeSecond;
