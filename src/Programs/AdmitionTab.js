import React from 'react';


export default function AdmitionTab(props) {

  return (

    <div className='AdmitionTab'>

      Modalitate admitere: {props.program.admissionType}

      <br/>

      Total locuri: {props.program.totalPlaces}

      <br/>
      Locuri taxa: {props.program.taxPlaces}

      <br/>
      Locuri buget: {props.program.taxFreePlaces}

      <br/>
      


    </div>



  );
}
