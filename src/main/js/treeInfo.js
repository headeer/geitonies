import React from 'react';
import video from "../../assets/vid.svg";
import Slider from "./carousel";
import Image from "./shared/image";
import hand from "../../assets/hand-white.svg";
import handBottom from "../../assets/hand-white-upside-down.svg";
import TreeInfoDesktop from "./treeInfoDesktop";
const TreeInfo = () => {
    const arr = [video, video];
    return (
        <div className="tree-info">
            <div className="mobile">

            <div className="hand-top">
                <Image img={hand}>
                </Image>
            </div>
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
            <div className="hand-bottom">
                <Image img={handBottom}>
                </Image>
            </div>
            </div>
            <div className="desktop">
                <TreeInfoDesktop></TreeInfoDesktop>
            </div>
        </div>
    );
}
export default TreeInfo;
