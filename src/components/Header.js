import React from 'react';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " id="topNav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="/admindashboard">Mint Store</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/admindashboard">
Home
                {' '}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admindashboard/products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admindashboard/categories">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admindashboard/employees">Employees</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
