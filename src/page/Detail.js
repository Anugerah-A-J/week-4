import React, { useState, useEffect } from 'react'
import icon from '../asset/arrow-upright.png';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
// import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';


const DetailPage = () => {
  const [detail, setDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/posts/${id}`).then(res => {
        console.log(res)
        setDetail(res.data)
      })
    }
  }, [id])

  return (
    <div className='layout container'>
      <div className="header mb-4">
        <nav className="navbar navbar-expand-lg mb-3">
          <div className="container-fluid ps-0">
            <div className="d-flex justify-content-between">
              <Link to="/"> Home </Link>
            </div>
            PlaceAdvisory
          </div>
        </nav>
        <h1 className="header-heading mt-5">{detail.siteName} ({detail.siteLocation})</h1>
        <p>by {detail.name}</p>
        <hr />
      </div>
      <div className="list-item">
        Description
        <h5>{detail.description}</h5>
      </div>
      <div className="comment-button text-primary">
        Add comment
      </div>

    </div>
  )
}
export default DetailPage