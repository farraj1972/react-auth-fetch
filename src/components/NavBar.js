import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.clear()
        navigate('/auth/login')
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
        
            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- Navbar brand --> */}
              <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="15"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                  {/* <a className="nav-link" href="#">Dashboard</a> */}
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>                  
                {/* <a className="nav-link" href="/projects">Projects</a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">Tasks</Link>
                  {/* <a className="nav-link" href="/tasks">Tasks</a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                  {/* <a className="nav-link" href="/tasks">Tasks</a> */}
                </li>  
                <li className="nav-item">
                    <button type='button' className="btn btn-light" onClick={logout}>Exit</button>
                    {/* <input type="button" onClick={logout} value="Exit" /> */}
                  {/* <Link className="nav-link" onClick={ logout }>Exit</Link> */}
                  {/* <a className="nav-link" href="/tasks">Tasks</a> */}
                </li>                                
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}
        
            {/* <!-- Right elements --> */}
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <Link className="text-reset me-3" to="/">
                <i className="fas fa-shopping-cart"></i>
              </Link>
        
              {/* <!-- Notifications --> */}
              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/">Some news</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">Another news</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">Something else here</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- Avatar --> */}
              
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="/"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" href="/">My profile</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">Settings</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        </>        

    );
};

export default NavBar;