import {Link}  from 'react-router-dom'

 
 function Header() {
    return (
        <div >
            <header  className="container-fluid">
              <nav   className="navbar"  >
              <h2>
              header
              
              </h2>
              <div  className="links">
                <Link  to="">
                  home
                </Link>
                <Link to="/create"  className="btn"> 
                      New post
                </Link>
              </div>
              </nav>
            </header>
        </div>
    )
}

export default Header
