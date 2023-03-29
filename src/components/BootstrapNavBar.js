import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BootstrapNavBar = () => {

    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.clear()
        navigate('/auth/login')
    }    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Project Manager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tasks">Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-right">
                <button className="btn btn-dark" type="button" onClick={logout}>Exit</button>
            </div>
        </nav>
    );
};

export default BootstrapNavBar;