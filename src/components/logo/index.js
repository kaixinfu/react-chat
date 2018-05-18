import React, {Component} from 'react';

import './logo.css'
import logoImage from './logo.png'

export default class Logo extends Component {

    render() {
        return (
            <div className="logo-container">
                <img src={logoImage} alt="logo"/>
            </div>
        );
    }
}
