/*import React from 'react';*/
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import Signup from './page/Signup';
import Home from './page/Home';


function App() {
  return ( <div className='foo'>  

  <Router>
      <div className = "top-right">
        <ul>
        <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Signup" className='signup'>Signup</Link>
          </li>
          </ul>
      </div>
          <div className='top-left'>
            <ul>
            <li>
            <Link to="/">Home</Link>|{" "}
          </li>
            </ul>
      </div>
  <Routes>
      <Route exact path='/Login' element={< Login />}> </Route>     
      <Route index element={<Home />} />     
      <Route exact path='/Dashboard' element={< Dashboard/>}> </Route>
      <Route exact path='/Signup' element={< Signup/>}> </Route>
  </Routes> 
    </Router> 
    <footer>Softwork 2022</footer>

    </div>



  );
}

export default App;
