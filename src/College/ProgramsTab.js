import React from 'react';
import {Link} from "react-router-dom";
import './ProgramsTab.scss'

let bachelorPrograms = [
]

let masterPrograms = [
]


export default function ProgramsTab(props) {

  return (

    <div className='ProgramsTab'>

      
      Programe de studiu

      {bachelorPrograms.length == 0 ? '' :
        <div>
          <div className='ProgramTitle'>
            Programe de licenta
          </div>

          <div className='ProgramsList'>
            {bachelorPrograms.map(Element => 
              <div className='ProgramsListElement'>
                <Link to='/programs/1'>
                  {Element.name}
                </Link>
              </div>


            )}
          </div>
        </div>
      }

      {masterPrograms.length == 0 ? '' :
        <div>
          <div className='ProgramTitle'>
            Programe de master
          </div>

          <div className='ProgramsList'>
            {masterPrograms.map(Element => 
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
