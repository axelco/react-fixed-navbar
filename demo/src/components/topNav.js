import React from 'react';


class TopNav extends React.Component {
    render() {
      return <nav className="top-nav navbar navbar-expand-lg navbar-dark ">

        <p>React fixed Navbar</p>
        <div className="ml-auto d-flex align-items-center" >

            <a href="https://github.com/axelco/react-fixed-navbar" className="btn btn-secondary">Github</a>                       
        </div>
      </nav>;
    }
  }

export default TopNav;