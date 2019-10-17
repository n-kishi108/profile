import React from 'react';
import logo from '../logo.svg';
import './Tops.scss';
import '../App/App.css';
class Tops extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="App-link">開発中</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tops;
