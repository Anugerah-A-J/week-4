import React from 'react'
import { Link } from "react-router-dom";

const Form = () => {
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
        <h1 className="header-heading">Form</h1>
        <p>Add your new place!</p>
      </div>
      <hr />
      <div className="form-wrapper">
        <form className="my-5">
          <div className="form">
            <div className="mb-3">
              <label className="form-label align-self-center">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="title"
              />
              <span id="" className="form-text text-danger">
                Please fill this field!
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center"
              >Site</label
              >
              <input
                type="text"
                className="form-control"
                placeholder="Enter the place"
                id="context"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center"
              >Location</label
              >
              <input
                type="text"
                className="form-control"
                placeholder="Enter the location"
                id="context"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center"
              >Description</label
              >
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              ></textarea>
            </div>
          </div>
          <div className="button">
            <button className="btn submit-button px-5">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form