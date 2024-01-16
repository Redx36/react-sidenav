import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './Sidenav.scss';

export class Sidenav extends Component {
    render() {
        return (
            <div>
                <h2>
                    Toolbox
                </h2>
                <div className="menu-list">
                   <Link to={"/"}>Dashboard</Link>
                   <Link to={"/users"}>Users</Link>
                   <Link to={"/stores"}>Magasins</Link>
                </div>
            </div>
        )
    }
}

export default Sidenav;
