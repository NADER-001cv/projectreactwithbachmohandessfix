import {Link}  from 'react-router-dom'

function Post({img,title,body,author,id,handledelete}) {

    /**
     * key  hatha  ely  jainy mil props  n7b n3ady fil function handle delet
     */
         
    return (
            
        <Link to={`post/${id}`  } className="post">
         <div className="container" >
            <div className="row">
  
            <img   src={img}   alt="imghere"  />
            <div className="post-author">
            by:{author ? author:'mouhamed'}
            </div>
               <p> {body}</p>
            <h3> title: {title}        </h3>
            </div>
            <button  className="btn" onClick={() =>handledelete(id)} > delete</button>
            </div>
            
            </Link>

        
    )
}

export default Post
