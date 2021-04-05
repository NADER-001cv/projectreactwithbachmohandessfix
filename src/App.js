
import {BrowserRouter as Router , Switch,Route}  from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import CreateNewPost from './Component/posts/CreateNewPost';
import PostDetails from './Component/posts/PostDetails';


import './index.css'
function App() {
  return (
           <Router>
           <div className="App">
           <Header/>
                 <main  className="container">
                 <Switch>
                 <Route path="/"  exact component={Home} />
                 <Route path="/create"  component={CreateNewPost} />
                 <Route path="/post/:id"  component={PostDetails} />



                 </Switch>
                  
                 
                 </main>
     
                 <Footer/>
         </div>
           </Router>
  );
}

export default App;
