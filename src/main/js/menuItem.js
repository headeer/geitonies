import Image from "./shared/image";
import React from "react";
import {useHistory, withRouter} from 'react-router-dom';

const MenuItem = (img) => {
    const history = useHistory();
    const handleClick = () => {
        const handTop = document.querySelector('.hand-top');
        const handBottom = document.querySelector('.hand-bottom');
        const handTopDesktop = document.querySelector('.hand-top-desktop');
        const handBottomDesktop = document.querySelector('.hand-bottom-desktop');
        if (handTop && !handTopDesktop) {
            handTop.style.transform = "translateY(100%)";
            handTop.style.transition = "all 0.5s ease-in-out";
        } else if (handTopDesktop) {
            handTopDesktop.style.transform = "translateY(-51%)";
            handTopDesktop.style.transition = "all 0.5s ease-in-out";
        }
        if (handBottom && !handBottomDesktop) {
            handBottom.style.transform = "translateY(-100%)";
            handBottom.style.transition = "all 0.5s ease-in-out";
        } else if (handBottomDesktop) {
            handBottomDesktop.style.transform = "translateY(51%)";
            handBottomDesktop.style.transition = "all 0.5s ease-in-out";
        }
        setTimeout(() => {
            if (!img.state) {
                history.push(img.imgData.route);
            } else {
                history.goBack();
            }
        }, 500)

    }
    return (
        <div className="menu-item" onClick={handleClick}>
            <Image img={img.img}></Image>
        </div>
    );
}
export default withRouter(MenuItem);
