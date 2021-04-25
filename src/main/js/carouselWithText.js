import React from 'react';
import {Carousel} from "react-responsive-carousel";
import arrowRight from '../../assets/arrow-right-red.svg';
import arrowLeft from '../../assets/arrow-left-red.svg';
import Image from "./shared/image";
import eteitpoy from "../../assets/main-info-page/eteitpoy.svg";
import bird from "../../assets/slide-with-text-1.svg";
import bench from "../../assets/main-info-page/bench.svg";
import miniTree from "../../assets/main-info-page/mini-tree.svg";
import door from "../../assets/main-info-page/door.svg";
import lamp from "../../assets/main-info-page/lamp.svg";

const SliderWithText = () => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: '33%',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };
    return (
        <Carousel className="carousel-with-text" showStatus={false} renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
                <span className="arrows" style={{...arrowStyles, left: 0}} onClick={onClickHandler}>
                         <Image img={arrowLeft}></Image>
                </span>
            )
        } renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
                <span className="arrows" style={{...arrowStyles, right: 0}} onClick={onClickHandler}>
                            <Image img={arrowRight}></Image>
                          </span>
            )
        } showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={true}>
            <div className="container diamond-shape">
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
            <div className="container diamond-shape">
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
            <div className="container diamond-shape">
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
            <div className="container diamond-shape">
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
            <div className="container diamond-shape">
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
            <div className="container diamond-shape">
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
        </Carousel>
    );
}
export default SliderWithText;
