// Navbar.tsx
import React, { useState } from 'react'
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const apiKey = 'YOUR_TMDB_API_KEY' // Replace with your actual TMDB API key

const Navbar: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([]) // Adjust the type based on your API response
  const [error, setError] = useState<string | null>(null)
  const history = useHistory()

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`,
      )
      setResults(response.data.results)
      setError(null)
      // Redirect to search results page or handle the results as needed
      history.push(`/search?query=${query}`)
    } catch (error) {
      console.error(error)
      setError('Error searching for movies or TV shows')
    }
  }

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
              onSubmit={handleSearch}
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
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="./Homepage">
                    HomePage
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown"
                    href="#"
                    id="navbarLightDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarLightDropdownMenuLink"
                  >
                    <li>
                      <Link to="/movies" className="dropdown-item">
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link to="/series" className="dropdown-item">
                        Tv Series
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="ms-4">
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
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
