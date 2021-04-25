import zero from "../../../assets/menu-0.svg";
import one from "../../../assets/menu-1.svg";
import two from "../../../assets/menu-2.svg";
import three from "../../../assets/menu-3.svg";
import zeroA from "../../../assets/menu-0a.svg";
import oneA from "../../../assets/menu-1a.svg";
import twoA from "../../../assets/menu-2a.svg";
import threeA from "../../../assets/menu-3a.svg";
import imgDesktop1 from "../../../assets/menu-desktop/can.svg";
import imgDesktop2 from "../../../assets/menu-desktop/gift.svg";
import imgDesktop3 from "../../../assets/menu-desktop/tree.svg";
import imgDesktop11 from "../../../assets/menu-desktop/can-active.svg";
import imgDesktop22 from "../../../assets/menu-desktop/gift-active.svg";
import imgDesktop33 from "../../../assets/menu-desktop/tree-active.svg";
const nav = [
    {
        id: 0,
        image: zero,
        image2: zeroA,
        imageDesktop: zero,
        imageDesktop2: zeroA,
        route: '/main-info'
    },
    {
        id: 1,
        image: one,
        image2: oneA,
        imageDesktop: imgDesktop1,
        imageDesktop2: imgDesktop11,
        route: "/home-info"
    },
    {
        id: 2,
        image: two,
        image2: twoA,
        imageDesktop: imgDesktop2,
        imageDesktop2: imgDesktop22,
        route: "/gift-info"
    },
    {
        id: 3,
        image: three,
        image2: threeA,
        imageDesktop: imgDesktop3,
        imageDesktop2: imgDesktop33,
        route: "/tree-info"
    },
]

export default nav
