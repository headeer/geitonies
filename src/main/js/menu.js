import React from 'react';
import nav from './utils/nav';
import MenuItem from "./menuItem";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentItem: null, clicked: false};
    }

    openSite(item) {
        this.setState((state) => ({
            ...state,
            currentItem: item,
            clicked: !state.clicked
        }));
    }

    render() {
        return (
            <nav>
                {nav.map((item) => (
                    <div onClick={() => this.openSite(item)} key={item.id}
                         className={this.state.currentItem === null || !this.state.clicked || this.state.currentItem === item && this.state.clicked === true ? 'menu-item enable' + ' menu-item'+item.id : 'menu-item disabled'  + ' menu-item'+item.id}>
                            <div className="mobile">
                                <MenuItem img={this.state.currentItem === item && this.state.clicked ? item.image2 : item.image} state={this.state.clicked} imgData={item}>
                                </MenuItem>
                            </div>
                            <div className="desktop">
                                <MenuItem img={this.state.currentItem === item && this.state.clicked ? item.imageDesktop2 : item.imageDesktop} state={this.state.clicked} imgData={item}>
                                </MenuItem>
                            </div>
                    </div>
                ))}
            </nav>
        );
    };
}

export default Menu;
