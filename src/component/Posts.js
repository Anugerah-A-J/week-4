import React, { useEffect, useState } from 'react'
import axios from "axios";

const Posts = () => {
  // GET Request
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    const { data } = await axios.get('http://localhost:3001/posts')
    console.log(data)
    setPlaces(data)
  }

  useEffect(() => {
    getPlaces()
  }, [])

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
    getPlaces()
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
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange={handleChangeName} required /> <br />
        <input type="text" placeholder='siteName' value={siteName} onChange={handleChangeSiteName} required /> <br />
        <input type="text" placeholder='siteLocation' value={siteLocation} onChange={handleChangeSiteLocation} required /> <br />
        <input type="text" placeholder='description' value={description} onChange={handleChangeDescription} required /> <br />
        <button type="submit">Add</button>
      </form>
      <ul>
        {places?.map((item) => {
          return (
            <li key={item.id}>
              {item.id} <br />
              {item.name} <br />
              {item.siteName} <br />
              {item.siteLocation} <br />
              {item.description} <br />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts