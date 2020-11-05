import React, { Component } from 'react';
import Project from "../Components/Project/Project";
import projects from "../Projects.json";

class Portfolio extends Component {
    state ={
        projects
    }
    render() {
        return (
            <div>
                <h1 className="center-align"> Projects </h1>
                <div className="row">
                    {this.state.projects.map(project => (
                        <Project
                            image={project.image} 
                            name={project.name}
                            links={project.links}
                            des={project.description}
                        />
                    ))}
                </div>
               
                
            </div>
        );
    }
}

export default Portfolio;