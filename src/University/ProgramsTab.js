import React from 'react';
import {Link} from "react-router-dom";
import './ProgramsTab.scss'

let colleges = [
]


export default function ProgramsTab(props) {

  return (

    <div className='ProgramsTab'>

      
      Facultati

      {colleges.length == 0 ? '' :
        <div>

          <div className='ProgramsList'>
            {colleges.map(Element => 
              <div className='ProgramsListElement'>
                <Link to='/programs/1'>
                  {Element.name}
                </Link>
              </div>


            )}
          </div>
        </div>
      }




    </div>



  );
}
