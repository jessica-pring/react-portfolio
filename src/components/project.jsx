/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// import '../../assets/images/portfolio_1.webp';
// import '../../assets/images/portfolio_2.webp';
// import '../../assets/images/portfolio_3.webp';

class Project extends React.Component {
  render() {
    const projectList = [
      {
        title: 'The Healthy Hair Hub',
        url: '#',
        img: 'portfolio_3.webp',
        blurb: "Ruby on Rails project to promote learning about styling and caring for Afro Caribbean hair. Worked collaboratively with my team on both front and back end to deliver a beautiful web app in 9 days."
      },
      {
        title: 'Open Tool Box',
        url: '#',
        img: 'portfolio_2.webp',
        blurb: 'Boo'
      },
      {
        title: 'Mister Cocktail',
        url: '#',
        img: 'portfolio_1.webp',
        blurb: 'Boo'
      }
    ];

    return (
      <div className="project-card">

        {projectList.map((project) => {
          return (
            <div className="main-card" key={project.title}>

              <div className="project-image">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={project.img} alt={project.title} />
                </a>
              </div>

              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
              </div>

            </div>
          );
        })}
      </div>
    );
  }
}

export default Project;
