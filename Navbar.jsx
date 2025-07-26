import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav                            
  className={`navbar navbar-expand-lg navbar-${props.bg} ,${props.Mode}   bg-${props.bg},  ${props.Mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/about">
                {props.about}
                
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            <div className={`form-check form-switch text-${props.bg=="light"?"dark":"light"}`}>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
  <input  onClick={props.modeChanger} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

</div>
<div className={`form-check form-switch text-${props.Mode=="light"?"dark":"light"}`}>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">green mode</label>
  <input  onClick={props.Changed} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

</div>
          </form>
        </div>
      </div>
    </nav>
  );
}

// react props  same as prameter
//you can customize the component through prop ,props.tile
//propstype
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  
};

//default props
Navbar.defaultProps = {
  title: "TExtUtlis",
  about: "About",
  home: "home screen",
};
