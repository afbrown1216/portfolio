import React, { Component } from 'react';
import Project from "../Components/Project/Project";
import projects from "../Projects.json";

class Portfolio extends Component {
    state ={
        projects
    }
    render() {
        return (
            <div className=" purple lighten-4">
                <h1 className="center-align"> Projects </h1>
                <div className="row">
                    <div className="col">
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
               
                
            </div>
        );
    }
}

export default Portfolio;