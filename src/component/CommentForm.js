import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CommentForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleChangeName = event => {
    setName(event.target.value)
  }

  const handleChangeComment = event => {
    setComment(event.target.value)
  }

  const handleSubmit = () => {
    addComment()
    alert('kayaknya harus nunggu')
  }

  const addComment = async () => {
    await axios.post(`https://placeadvisory-dev.herokuapp.com/comments`, { idPost: id, name, comment })
    setName('')
    setComment('')
  }

  return (
    <div className="form-wrapper mt-3">
      <h4>Add Comment Here</h4>
      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="form">
          <div className="mb-3">
            <label className="form-label align-self-center">Name</label>
            <input type="text" className="form-control" placeholder='Enter your name'
              required value={name} onChange={handleChangeName} />
          </div>
          <div className="mb-3">
            <label htmlFor="context" className="form-label align-self-center">Comment</label>
            <textarea type="text" className="form-control" placeholder='Add your commment'
              required value={comment} onChange={handleChangeComment} />
          </div>
        </div>
        <div className="button">
          <button className="btn submit-button px-5" type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm
