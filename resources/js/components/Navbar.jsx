import React from 'react';
import { Link } from '@inertiajs/inertia-react'


function Navbar({ pageName, cats }) {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container-xxl">
                    <a className="navbar-brand" href="#">{pageName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href={route('home')}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href={route('books')}>Books</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {cats.map(cc => {
                                        return (
                                            <li key={cc.id}>
                                                <Link className="dropdown-item" href={route('categories', { id: cc.id })}>{cc.category}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;