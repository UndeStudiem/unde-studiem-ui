import React from 'react';
import './Navbar.scss';
import axios from 'axios';
import Button from '@material-ui/core/Button';



import {Link} from "react-router-dom";


function Navbar(props) {



  return (
    <div className="Navbar">

        <nav class="navbar fixed-top scrolling-navbar navbar-expand-lg">
            <div className="container">

            <Link to={`/`}>
              <div className="Logo">
                Unde Studiem
              </div>  
            </Link>


              <div className='btnContainer'>
                <button type="button" onClick={() => window.parent.open('https://www.google.com/')} class="btn btn-light">
                  Da-ne feedback!
                </button>
              </div>



            </div>
        </nav>
    </div>
    

  );
  
}

export default Navbar;
