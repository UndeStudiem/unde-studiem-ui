import React from 'react';
import './Programs.scss';
import ProgramsMenu from './ProgramsMenu'
import axios from 'axios'


function Programs({match}) {

  let id = match.params.id;

  const [program, setProgram] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/program/${id}`)
    .then(response => {
      setProgram(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (
    <div className="Programs">


      <div className='PageTitle'>
        {program.name}
      </div>
      <div className='PageTitle2'>
        {program.college ? program.college.name : ''}
      </div>



      <ProgramsMenu program={program}/>

    </div>
  );
  
}

export default Programs;
