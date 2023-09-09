import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-warning shadow`}>
      <div className="container">
        <a className={`navbar-brand text-secondary-emphasis fw-bold`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item me-5">
              <a className={`nav-link active text-secondary-emphasis`}aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item me-5">
              <a className={`nav-link text-secondary-emphasis`} href="#">About</a>
            </li>
            <li className="nav-item me-5">
              <a className={`nav-link text-secondary-emphasis`} href="#">Services</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          ${props.mode} */}
          <div className="form-check form-switch my-auto">
            <input className='form-check-input shadow-none' type="checkbox" id='flexSwitchCheckDefault' onClick={props.toggleMode}/>
            <label className={`form-check-label fw-bold text-${props.mode==='warning'? 'secondary-emphasis':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='warning'?'DarkMode':'LightMode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired};

Navbar.defaultProps = {title: "Logo"}
