import React from 'react';
import { Link } from "react-router-dom"; 

const Project = (props) => {

    // const clickDeployed = () => {

    // }

    return (
       
            <div className="col s6">
                <div className="card medium hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={imgStyle} src={props.image} alt="Project preview"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{props.name} <i className="material-icons right"> more_vert</i></span>
                        <p><Link target="_blank" to={{pathname: props.links.deployedLink}}> Deployed Link </Link></p>
                        <p><Link to={{ pathname: props.links.gitHubLink}} target="_blank"> GitHub Link </Link></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"> {props.name} <i className="material-icons right">close</i></span>
                        <p>{props.des}</p>
                    </div>
                </div>
            </div>

    );
};

var imgStyle ={
    width: "100%"
}
export default Project;