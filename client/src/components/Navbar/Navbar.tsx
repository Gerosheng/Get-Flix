import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar: React.FC = () => {
  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={undefined}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Sono:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <nav className="navbar navbar-expand-lg">
          <div className="container ">
            <a className="navbar-brand me-lg-5 me-0" href="/">
              <img
                src="https://www.vtaffiliates.com/wp-content/themes/vt/images/logo.gif?v=1"
                className="logo-image img-fluid"
                alt="templatemo pod talk"
              />
            </a>
            <form
              action="#"
              method="get"
              className="custom-form search-form flex-fill me-3"
              role="search"
              id="search_form"
            >
              <div className="input-group input-group-lg">
                <input
                  name="search"
                  type="search"
                  className="form-control"
                  id="search"
                  placeholder="Search films, series"
                  aria-label="Search"
                />
                <button type="submit" className="form-control" id="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"  />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="./Homepage" style= {{color:'white'}}>
                    HomePage
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="./movies" style= {{color:'white'}}>
                    Movies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="./series" style= {{color:'white'}}>
                  Series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
             
              <div className="ms-4" >
                <Link
                  to="/Login"
                  className="btn custom-btn custom-border-btn smoothscroll"
                >
                  Login
                </Link>
              </div>
              <div className="ms-4">
                <Link
                  to="/Profile"
                  className="btn custom-btn custom-border-btn smoothscroll"
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </div> 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Navbar
