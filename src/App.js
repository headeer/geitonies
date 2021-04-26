import './App.css';
import React from "react";
import Image from './main/js/shared/image';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Menu from './main/js/menu';
import logo from './assets/logo.svg';
import Home from './main/js/home';
import HomeSecond from './main/js/homeSecond';
import Map from "./main/js/map";
import Gift from "./main/js/gift";
import MainInfo from "./main/js/mainInfo";
import TreeInfo from "./main/js/treeInfo";

const App = ( ) => {
    return (
        <div className="app">
            <div className="logo top">
                <a href="/home">
                    <Image img={logo}>
                    </Image>
                </a>
            </div>
            <Router>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={450}
                            classNames="fade"
                        >
                            <Switch location={location}>
                                <Route exact path="/home" component={Home}/>
                                <Route path="/home-info" component={HomeSecond}/>
                                <Route path="/map" component={Map}/>
                                <Route path="/gift-info" component={Gift}/>
                                <Route path="/main-info" component={MainInfo}/>
                                <Route path="/tree-info" component={TreeInfo}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
                <Menu></Menu>
            </Router>
        </div>
    );
}

export default App;
