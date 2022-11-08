import React, { useState, useEffect } from 'react'
import icon from '../asset/arrow-upright.png';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
// import { convertRoutesToDataRoutes } from '@remix-run/router/dist/utils';


const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        if(id) {
            axios.get(`http://localhost:3001/posts/${id}`).then(res => {
                console.log(res)
                setDetail(res.data)
            })
        }
    }, [id])

    return (
        <div className="detailpage">
            <h2>DetailTour</h2>
            <h5>{detail.id}</h5>
            <h5>{detail.name}</h5>
            <h5>{detail.siteName}</h5>
            <h5>{detail.siteLocation}</h5>
            <h5>{detail.description}</h5>
        </div>
    )
}
export default DetailPage