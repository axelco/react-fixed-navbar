import React from 'react';
import {NavLink,Link,} from 'react-router-dom'

class TopNav extends React.Component {
    render() {
      return <nav className="top-nav navbar navbar-expand-lg navbar-dark ">

      <Link to="/" className="navbar-brand">React fixed Navbar</Link>
      <div className="ml-auto d-flex align-items-center" >
          <ul className="navbar-nav mr-3">
              <li className="nav-item">
                  <NavLink to="/" className="nav-link">Demo</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/doc" className="nav-link">Doc</NavLink>
              </li>
          </ul>
          <a href="#" className="btn btn-secondary">Github</a>                       
      </div>
      </nav>;
    }
  }

export default TopNav;