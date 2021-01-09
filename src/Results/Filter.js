import React from 'react';
import './Filter.scss';
import Chip from '@material-ui/core/Chip'; 


function Filter(props) {

  return (
    <div className="Filter">

      {props.type == 'program' ? 
          <div className='Filter-degree'>
            Program de:&nbsp;
            <Chip label={props.degree}/>
          </div> : ''
      }

      {props.type == 'program' || props.type == 'college' ? 
        <div className='Filter-fields'>
          Domenii:&nbsp;
          {props.fields.filter(Element => Element).map(Element => <><Chip label={Element} /> &nbsp;</>)}
        </div>
      : ''}

      <div className='Filter-city'>
        Orase:&nbsp;
        {props.cities.filter(Element => Element).map(Element => <><Chip label={Element} /> &nbsp;</>)}
      </div>

    </div>
  );
  
}

export default Filter;
