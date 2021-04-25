import React from 'react';
import Image from './shared/image';
import headerLogo from '../../assets/header-logo-main.svg';
import tree from '../../assets/main-info-page/tree.svg';
import bench from '../../assets/main-info-page/bench.svg';
import bigLogo from '../../assets/main-info-page/big-logo.svg';
import miniTree from '../../assets/main-info-page/mini-tree.svg';
import door from '../../assets/main-info-page/door.svg';
import chicken from '../../assets/main-info-page/chicken.svg';
import eteitpoy from '../../assets/main-info-page/eteitpoy.svg';
import lamp from '../../assets/main-info-page/lamp.svg';
import leaf from '../../assets/main-info-page/leaf.svg';
import bird from '../../assets/slide-with-text-1.svg';
import lampMini from '../../assets/main-info-page/lamp-solo.svg';
import beer from '../../assets/home-image.svg';
import {useHistory} from "react-router-dom";
import SliderWithText from "./carouselWithText";

const MainInfo = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/map");
    }
    return (
        <div className="main-page-info">
            <header>
                <Image img={headerLogo}>
                </Image>
            </header>
            <div className="mobile">
                <SliderWithText>
                </SliderWithText>
            </div>
            <div className="desktop">
                <div className="row row-1">
                    <Image img={tree}></Image>
                </div>
                <div className="row row-2">
                    <div className="container diamond-shape shape-1">
                        <div className="item-count">
                            <h5>2000</h5>
                            <p>
                                ΤΡΟΥ ΛΟΚΑΛΣ ΕΧΟΥΝ
                                ΗΔΗ ΠΕΙ ΤΙΣ ΙΔΕΕΣ
                                ΤΟΥΣ. ΕΣΥ?

                            </p>
                            <Image img={eteitpoy}></Image>
                        </div>
                    </div>
                    <div className="container diamond-shape shape-2">
                        <div className="item-count">

                            <h5>35%</h5>
                            <p>
                                ΤΡΟΥ ΛΟΚΑΛΣ
                                ΘΕΛΟΥΝ ΛΙΓΟΤΕΡΕΣ
                                ΚΕΡΑΙΕΣ

                            </p>
                            <Image img={bird}></Image>
                        </div>
                    </div>
                    <div className="container diamond-shape shape-3">
                        <div className="item-count">
                            <h5>1000</h5>
                            <p>
                                ΤΡΟΥ ΛΟΚΑΛΣ
                                ΘΕΛΟΥΝ
                                ΠΕΡΙΣΣΟΤΕΡΑ
                                ΠΑΓΚΑΚΙΑ
                            </p>
                            <Image img={bench}></Image>
                        </div>
                    </div>
                </div>
                <div className="row row-3">
                    <div className="big-logo">
                        <Image img={bigLogo}></Image>
                    </div>
                    <div className="leaf">
                        <Image img={leaf}></Image>
                    </div>
                </div>
                <div className="row row-4">
                    <div className="container diamond-shape shape-1">
                        <div className="item-count">
                            <h5>45%</h5>
                            <p>
                                TΩΝ ΤΡΟΥ ΛΟΚΑΛΣ
                                ΘΕΛΟΥΝ
                                ΠΕΡΙΣΣΟΤΕΡΟ
                                ΠΡΑΣΙΝΟ
                            </p>
                            <Image img={miniTree}></Image>
                        </div>
                    </div>
                    <div className="container diamond-shape shape-2">
                        <div className="item-count">
                            <h5>450</h5>
                            <p>
                                ΤΡΟΥ ΛΟΚΑΛΣ
                                ΘΕΛΟΥΝ
                                ΠΟΤΗΣΤΡΕΣ ΓΙΑ ΤΑ
                                ΑΔΕΣΠΩΤΑ
                            </p>
                            <Image img={door}></Image>
                        </div>
                    </div>
                    <div className="container diamond-shape shape-3">
                        <div className="item-count">
                            <h5>200</h5>
                            <p>
                                ΤΡΟΥ ΛΟΚΑΛΣ
                                ΘΕΛΟΥΝ
                                ΠΕΡΙΣΣΟΤΕΡΟ ΦΩΣ
                                ΣΤΟ ΔΡΟΜΟ
                            </p>
                            <Image img={lamp}></Image>
                        </div>
                    </div>
                </div>
                <div className="row row-5">
                    <div className="lamp">
                        <Image img={lampMini}></Image>
                    </div>
                    <div className="chicken">
                        <Image img={chicken}></Image>
                    </div>
                </div>
            </div>
            <div className="beer">
                <Image img={beer}>
                </Image>
            </div>

        </div>
    );
}
export default MainInfo;
