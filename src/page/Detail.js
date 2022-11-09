import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import CommentForm from '../component/CommentForm';
// import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';


const DetailPage = () => {
  const [detail, setDetail] = useState({})
  const { id } = useParams()

  const [comments, setComments] = useState([])

  const getPost = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts/${id}`)
    setDetail(data)
  }

  const getComments = async () => {
    const { data } = await axios.get(`http://localhost:3001/comments`)
    setComments(data)
  }

  useEffect(() => {
    getPost()
    getComments()
  }, [id])

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  }

  const deleteComment = (x) => {
    axios.delete(`http://localhost:3001/comments/${x}`);
    getPost()
    getComments()
  };

  return (
    <div className='layout container'>
      <div className="header mb-4">
        <nav className="navbar navbar-expand-lg mb-3">
          <div className="container-fluid ps-0">
            <div className="d-flex justify-content-between">
              <Link to="/post"> Back to the List </Link>
            </div>
            PlaceAdvisory
          </div>
        </nav>
        <h1 className="header-heading mt-5">{detail.siteName} ({detail.siteLocation})</h1>
        <p>by {detail.name}</p>
        <hr />
      </div>
      <div className="list-item">
        <h5>Description</h5>
        <p>{detail.description}</p>
        <hr />
        <div className="comment-button text-primary">
          Edit description
        </div>
      </div>
      <div onClick={handleClick} className="comment-button text-primary">
        Add comment
      </div>
      {isShown && <CommentForm />}
      <div className="comment-list-wrapper mt-3">
        <h4>All Comments</h4>
        <ul>
          {comments?.map((item) => {
            if (item.idPost == id) {
              return (
                <li key={item.id}>
                  {item.name} <br />
                  {item.comment}
                  <button>Edit</button>
                  <button onClick={() => deleteComment(item.id)}>Delete</button>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default DetailPage
