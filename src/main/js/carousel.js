import React from 'react';
import {Carousel} from "react-responsive-carousel";

import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import Image from "./shared/image";

const Slider = (images) => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };
    return (
        <Carousel className="carousel" showStatus={false} renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
                <span className="arrows" style={{...arrowStyles, left: 15}} onClick={onClickHandler}>
                         <Image img={arrowLeft}></Image>
                </span>
            )
        }
                  renderArrowNext={(onClickHandler, hasNext) =>
                      hasNext && (
                          <span className="arrows" style={{...arrowStyles, right: 15}} onClick={onClickHandler}>
                            <Image img={arrowRight}></Image>
                          </span>
                      )
                  } showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={true}>
            {images.images.map((item, idx) => (
                <div className="slide" key={idx}>
                    <Image img={item}>
                    </Image>
                </div>
            ))}
        </Carousel>
    );
}
export default Slider;
