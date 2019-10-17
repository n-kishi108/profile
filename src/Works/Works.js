import React from 'react';
import './Works.scss';
import json from '../Components/data.json'

class Works extends React.Component {
    // constructor(props) {
    //     super(props)
    //     let obj = json.object.profile
    //     let dom = []
    //     for(let el in obj) {
    //         if(typeof el == 'object') {
    //             let children = []
    //             for(let child of el) {
    //                 children.push()
    //             }
    //         }
    //     }
    // }
    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Works</h1>
            </div>
        )
    }
}

export default Works;
