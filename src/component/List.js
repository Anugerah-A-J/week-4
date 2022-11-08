import React from 'react'
import icon from '../asset/arrow-upright.png';
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <div className="header mb-4">
        <nav className="navbar navbar-expand-lg mb-3">
          <div className="container-fluid ps-0">
            <div className="d-flex justify-content-between">
              <Link to="/"> Home </Link>
            </div>
            PlaceAdvisory
          </div>
        </nav>
        <h1 className="header-heading mt-5">All Posts</h1>
        <p>Here are the visited places!</p>
        <hr />
      </div>
      <div className="list-wrapper mt-5">
        <div className="row">
          <div className="col-4">
            <div className="list-item">
              <a href="#">
                <div className="row">
                  <div className="col-10">
                    <h4 className="text">siteName</h4>
                    <div className="text">siteLocation</div>
                    <div className="text mt-2">siteDescription</div>
                  </div>
                  <div className="col-2">
                    <div className="icon">
                      <img src={icon} alt="arrow" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="delete-button text-danger">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List