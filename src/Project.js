import React, {Component} from 'react';
import PROJECTS from './data/project';

class ProjectChild extends Component {
  render(){
    const { title, image, description, link } = this.props.projectProps;

    return (
      <div style={{ display: 'inline-block', width: 350, margin: 10 }}>
        <h3> {title} </h3>
        <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
        <p> {description} </p>
        <a href={link}> {link} </a>
      </div>
    )
  }
}


class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(project => {
              return (
                <ProjectChild key={project.id} projectProps={project} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Projects;