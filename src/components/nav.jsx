/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Nav extends React.Component {
  render() {
    const navList = [
      { title: 'Home', src: '#home', },
      { title: 'Projects', src: '#projects' },
      { title: 'CV', src: '#cv' },
      { title: 'LinkedIn', src: '#' },
      { title: 'GitHub', src: '#' },
      { title: 'Contact', src: '#contact' },
    ];

    return (
      <ul>
        {navList.map((navItem) => {
          return <li key={navItem.title}><a href={navItem.src}>{navItem.title}</a></li>;
        })}
      </ul>
    );
  }
}

export default Nav;
