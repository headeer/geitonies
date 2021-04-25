import React from 'react';
import Image from './shared/image';
import handBottom from "../../assets/hand-white-upside-down.svg";
import hand from "../../assets/hand-white.svg";
import Slider from "./carousel";
import slide1 from '../../assets/slide-1.svg';
import slide2 from '../../assets/slide-2.svg';
import slide3 from '../../assets/slide-3.svg';
import GiftInfoDesktop from "./giftInfoDesktop";

const Gift = () => {
    const images = [slide1, slide2, slide3];
    return (
        <div className="gift-page">
            <div className="mobile">
                <div className="hand-top">
                    <Image img={hand}>
                    </Image>
                </div>
                <h2 className="text">
                    <span className="red-text">ΧΧ</span> τυχεροί
                    κερδίζουν το
                    συλλεκτικό Τρου
                    Λόκαλ Box!
                </h2>
                <p className="text">
                    Πως θα σου φαινόταν να κάνεις κρουαζιέρα σε απάτητες παραλίες των Κυκλάδων, με ιστιοπλοϊκό; Μια
                    βόλτα για ψάρεμα με τον τοπικό ψαρά στην Ύδρα; Να φτάσεις σε παραλίες που δεν φτάνει κανείς με το
                    καϊκι του κύριου Γιάννη; Ένα safari στα graffiti της Αθήνα και στα μυστικά του street food;
                    Πεζοπορία στα μυστικά μονοπάτια του Πηλίου; Μαθήματα αγγειοπλαστικής στη Σίφνο;
                    Μπες στην κλήρωση και διεκδίκησε εμπειρίες που θα τις θυμάσαι για πάντα.
                </p>
                <Slider images={images}></Slider>
                <div className="hand-bottom">
                    <Image img={handBottom}>
                    </Image>
                </div>
            </div>
            <div className="desktop">
                <GiftInfoDesktop></GiftInfoDesktop>
            </div>
        </div>
    );
}
export default Gift;
