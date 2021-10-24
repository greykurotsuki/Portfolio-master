import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg" id="mainNav">
          <div className="container">
            <NavLink className="navbar-brand" to="/">Oleh_Markevych</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"><i className="fas fa-home mr-2"></i>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about"><i className="fas fa-address-card mr-2"></i>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/work"><i className="fas fa-briefcase mr-2"></i>Work</NavLink>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Navbar
