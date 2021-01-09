import React from 'react';
import './University.scss';
import UniversityMenu from './UniversityMenu'
import axios from 'axios'

function University({match}) {

  let id = match.params.id;

  const [university, setUniversity] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/university/${id}`)
    .then(response => {
      setUniversity(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (
    <div className="University">


      <div className='PageTitle'>
        {university.name}
      </div>



      <UniversityMenu university={university}/>

    </div>
  );
  
}

export default University;
