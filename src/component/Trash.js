import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Trash = () => {
  // GET Request
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    const { data } = await axios.get('https://placeadvisory-dev.herokuapp.com/posts')
    console.log(data)
    setPlaces(data)
  }

  // const onClickDeleteButtonHandler = (id) => {
  //   axios.delete(`http://localhost:3001/posts/${id}`);
  //   getPlaces();
  // };

  const onClickDeleteButtonHandler = (id) => {
    axios.patch(`https://placeadvisory-dev.herokuapp.com/posts/${id}`, { isDeleted: false });
    getPlaces();
  };

  useEffect(() => {
    getPlaces()
  }, [])

  // Search state
  const [query, setQuery] = useState('')
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
        <h1 className="header-heading mt-5">Removed Post</h1>
        <p>Here are the removed places!</p>
        <hr />
      </div>
      <div className="list-wrapper mt-3">
        <input className='search' type="text" placeholder='search' onChange={(event) => setQuery(event.target.value)} />
        <div className="row mt-3">
          {places?.filter(item => item.siteName.toLowerCase().includes(query) || item.siteLocation.toLowerCase().includes(query) || item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)).map((item) => {
            return (
              <div className={`col-4 ${!item.isDeleted ? "d-none" : ""} list-item-wrapper`} key={item.id}>
                <div className="list-item">
                  <div className="row">
                    <div className="col-10">
                      <h4 className="text">{item.siteName} by {item.name}</h4>
                      <div className="text">{item.siteLocation}</div>
                      <div className="text mt-2">{item.description}</div>
                    </div>
                    <div className="col-2">
                      <div className="icon">
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="delete-button text-danger">
                    <div className='text-success' onClick={() => onClickDeleteButtonHandler(item.id)}>
                      Restore
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Trash