import React from 'react';
import './Skills.scss';
import json from '../Components/data.json'
class Skills extends React.Component {
    getSkills() {
        let obj =  json.object.skills
        let skills = []
        for(let key in obj) {
            skills.push(
                <article className="card" key={key}>
                    <div className="k">
                        <h2>{key}</h2>
                    </div>
                    <div className="v">
                        <h2>{obj[key].exp}年</h2>
                    </div>
                </article>
            )
        }
        return skills
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="title">Skills</h1>
                {this.getSkills()}
            </div>
        )
    }
}

export default Skills;
