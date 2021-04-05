import {useState}  from 'react'
import './Postscss.css'
import Post from "./Post";


function Posts() {
     


          const [posts, setpost] = useState([
              {id:1,title:'title one',body:'body one ...---',image:"https://images.unsplash.com/photo-1617312370771-98980962f468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",author:'admin'},
              {id:2,title:'title two',body:'body two ...---',image: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",author:'nader'},
              {id:3,title:'title three',body:'body three ...---',image:"https://images.unsplash.com/photo-1617391258031-f8d80b22fb35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}
             
          ])
         
          const handledelete = (key) =>{
            let curentpost = [...posts]
            let resultcurnt = curentpost.filter(function(post){
                           if(post.id !== key ){
                                      return  post }
            }
            
            )
            setpost(resultcurnt)
            // console.log('key',key)
            // console.log(curentpost[0] )
            //       console.log(resultcurnt)
          }
          return (
              <div  className="container" >
              <section className="posts ">
              
              {
                posts.map((post)  => (

                         <Post  id={post.id}
                          img={post.image} 
                          title={post.title} 
                          author={post.author} 
                          body={post.body}
                          handledelete={handledelete}
                          />
                       ))
              }
              </section >
              </div>
                

        
          

    )
}

export default Posts


