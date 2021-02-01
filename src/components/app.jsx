/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Nav from './nav';
import ProjectList from './project_list';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="landing" id="home">
          <div id="navbar">
            <Nav />
          </div>

          <div id="header">
            <h1>Jessica Pring</h1>
            <p>Full Stack Web Developer</p>
          </div>
        </div>

        <div id="projects">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default App;
