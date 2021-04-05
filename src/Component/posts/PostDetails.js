
import React from 'react'
import {useParams }  from 'react-router-dom'
import  postdetails  from './Posts'
function PostDetails(props) {
          let {id}  = useParams()
     const nexpost = postdetails.filter( (post) => post.id == id )
    return (
        <article   className="container post-details">
        <div className="post-details-title">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.{props.title}</h1>
          <button className="btn btn-danger"> Delete </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt=""
          className="post-details-img"
        />
        <p className="post-details-body">
                lorem

        </p>
      </article>
    )
}

export default PostDetails
