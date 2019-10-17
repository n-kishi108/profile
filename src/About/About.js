import React from 'react';
import './About.scss';
import json from '../Components/data.json'

class About extends React.Component {
    constructor(props) {
        super(props)
        let obj = json.object.profile
        this.dom = []
        for(let el in obj) {
            if(obj[el] instanceof Array) {
                let children = []
                for(let child of obj[el]) {
                    children.push(<h2 key={child}>{child}</h2>)
                }
                this.dom.push(
                    <li key={el}>
                        <div className="k">
                            <h2>{el}</h2>
                        </div>
                        <div className="v">
                            {children}
                        </div>
                    </li>
                )
            }else{
                this.dom.push(
                    <li key={el}>
                        <div className="k">
                            <h2>{el}</h2>
                        </div>
                        <div className="v">
                            <h2>{obj[el]}</h2>
                        </div>
                    </li>
                )
            }
        }
    }
    render() {
        return (
            <div className="wrapper">
                <h1 className="title">About</h1>
                <article className="card">
                    <ul>
                        {this.dom}
                    </ul>
                </article>
            </div>
        )
    }
}

export default About;
