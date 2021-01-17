/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Project from './project';

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>

        <Project />
      </div>
    );
  }
}

export default ProjectList;
