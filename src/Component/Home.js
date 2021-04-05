import React ,{useState}  from 'react'
import Posts  from "./posts/Posts"


function Home() {
  //       const [name, setName] = useState("ali")
  //   const  handlepost = (name,e) =>  {
  //     setName('ahmed')
  // //  console.log(name)
  //  console.log(e)
  //   } 
  //   const handlename = () => {
  //     setName('ahmed ali')
  //   }
    return (
        <div  className="container">
       
       

           
            <Posts/>
          
        </div>
    )
}

export default Home
