import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const modeType = props.mode==='light' ? 'black' : 'white'

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/About">{props.about}</a>
            </li> */}
          </ul>

          
          <FormControlLabel
          control={
            <Switch checked={props.checked} onChange={props.toggleMode} name="mode" />
          }
          label=  {props.mode==='dark'? "Enable Light Mode" : "Enable Dark Mode"}
          sx={{ color: modeType}}
        />
        </div>
      </div>
    </nav>

  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'App Title',
    about: 'About'
};

