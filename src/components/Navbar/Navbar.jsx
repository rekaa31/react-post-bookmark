import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Simple header</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/bookmark" className="nav-link">Bookmark</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar
