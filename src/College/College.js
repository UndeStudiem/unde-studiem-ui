import React from 'react';
import './College.scss';
import CollegeMenu from './CollegeMenu'
import axios from 'axios'

function College({match}) {

  let id = match.params.id;

  const [college, setCollege] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/college/${id}`)
    .then(response => {
      setCollege(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (
    <div className="College">


      <div className='PageTitle'>
        {college.name}
      </div>
      <div className='PageTitle2'>
        {college.university ? college.university.name : ''}
      </div>



      <CollegeMenu college={college}/>

    </div>
  );
  
}

export default College;
