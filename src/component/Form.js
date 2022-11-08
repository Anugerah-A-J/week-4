import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Form = () => {
  // POST Request
  const [name, setName] = useState('');
  const [siteName, setSiteName] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeName = event => {
    setName(event.target.value)
  }

  const handleChangeSiteName = event => {
    setSiteName(event.target.value)
  }

  const handleChangeSiteLocation = event => {
    setSiteLocation(event.target.value)
  }

  const handleChangeDescription = event => {
    setDescription(event.target.value)
  }

  const createPost = async () => {
    await axios.post('http://localhost:3001/posts', { name, siteName, siteLocation, description })
    setName('')
    setSiteName('')
    setSiteLocation('')
    setDescription('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!name) return
    createPost()
  }
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
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="form">
            <div className="mb-3">
              <label className="form-label align-self-center">Name</label>
              <input type="text" className="form-control" placeholder='Enter your name' value={name} onChange={handleChangeName} required />
              <span className="form-text text-danger">
                Please fill this field!
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center">Site</label>
              <input type="text" className="form-control" placeholder='siteName' value={siteName} onChange={handleChangeSiteName} required />
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center">Location</label>
              <input type="text" className="form-control" placeholder='siteLocation' value={siteLocation} onChange={handleChangeSiteLocation} required />
            </div>
            <div className="mb-3">
              <label htmlFor="context" className="form-label align-self-center">Description</label>
              {/* <input type="text" className="form-control" placeholder='description' value={description} onChange={handleChangeDescription} required /> */}
              <textarea type="text" className="form-control" placeholder='description' value={description} onChange={handleChangeDescription} required />
            </div>
          </div>
          <div className="button">
            <button className="btn submit-button px-5" type='submit'>Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form