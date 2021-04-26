import React from 'react';
import Image from './shared/image';
import headerLogo from '../../assets/header-logo.svg';
import beer from '../../assets/home-image.svg';
import {useHistory} from "react-router-dom";
import HomeDesktop from './homeDesktop';

const Home = () => {
    let history = useHistory();
    const handleClick = () => {
            history.push("/map");
    }

    return (
        <div className="home-page">
            <div className="mobile">
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
                <div className="beer">
                    <Image img={beer}>
                    </Image>
                </div>
                <div className="background">
                </div>
            </div>
            <div className="desktop">
                <HomeDesktop>
                </HomeDesktop>
            </div>
        </div>
    );
}
export default Home;
