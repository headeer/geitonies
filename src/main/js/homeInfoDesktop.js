import React from 'react';
import Image from './shared/image';
import homeLogo from '../../assets/home-second-logo.svg';
import beer from '../../assets/gift-info/beer.svg';
import { useHistory } from "react-router-dom";
import left from "../../assets/gift-info/left-wing.svg";
import right from "../../assets/gift-info/right-wing.svg";

const HomeInfoDesktop = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/map");
    }
    return (
        <div className="home-page-info-desktop">
            <div className="row-1">
                    <Image img={left}>
                    </Image>
            </div>
            <div className="row-2">
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
                <div className="beer">
                    <Image img={beer}>
                    </Image>
                </div>
                <button type="button" onClick={handleClick}>
                    Μάθε περισσότερα
                </button>

            </div>
            <div className="row-3">
                <Image img={right}>
                </Image>
            </div>
        </div>
    );
}
export default HomeInfoDesktop;
