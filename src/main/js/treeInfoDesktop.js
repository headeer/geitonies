import React from 'react';
import Image from './shared/image';
import left from "../../assets/gift-info/left-wing.svg";
import right from "../../assets/gift-info/right-wing.svg";
import Slider from "./carousel";
import video from "../../assets/vid.svg";

const TreeInfoDesktop = () => {
    const arr = [video, video];

    return (
        <div className="tree-info-desktop">
            <div className="row-1">
                <Image img={left}>
                </Image>
            </div>
            <div className="row-2">
                <h2 className="text">
                    Ανάπλαση Πάρκου ΦΙΞ.
                    Κάτι αλλάζει στο κέντρο της Αθήνας!
                </h2>
                <p className="text">
                    Τρου Λόκαλ θα πει αγαπάω την πόλη μου και το δείχνω με κάθε τρόπο. Κι εμείς ξεκινήσαμε ομορφαίνοντας τη γειτονιά που μας “γέννησε”. Δες πως η ανάπλαση του Πάρκου ΦΙΞ, δίνει ανάσες ομορφιάς σε μια ολόκληρη γωνιά της πόλης..
                </p>
                <Slider images={arr}>
                </Slider>
                <p className="text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
            </div>
            <div className="row-3">
                <Image img={right}>
                </Image>
            </div>
        </div>
    );
}
export default TreeInfoDesktop;
