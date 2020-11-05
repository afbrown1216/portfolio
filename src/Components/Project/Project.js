import React from 'react';
import { Link } from "react-router-dom"; 

const Project = (props) => {
    return (
       
            <div class="col s6">
                <div className="card medium hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={imgStyle} src={props.image} alt="Project preview image"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{props.name} <i className="material-icons right">More Info</i></span>
                        <p><a href="{props.links.deployedLink}">Deployed Link</a></p>
                        <p><Link to="{props.links.gitHubLink}">GitHub Link</Link></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"> {props.name} <i className="material-icons right">close</i></span>
                        <p>An app that displays the employees of Grey-Sloan Memorial Hospital through out the seasons of the fictional show Grey's Anatomy. You can search the directory for a specific employee and sort by last name.</p>
                    </div>
                </div>
            </div>

    );
};

var imgStyle ={
    width: "100%"
}
export default Project;