import React from 'react';
import './Home.scss';
import CardItem from '../Card/CardItem'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import axios from 'axios'

function Home() {


  const [sugestions, setSugestions] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/college?page=0&size=8`)
    .then(response => {
      setSugestions(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (
    <div className="Home">

      <div className='Pagetitle'>
        <Link to={`/search`}>
          <Button variant="contained" size="large" color="primary">
            Gaseste programe de studii
          </Button>
        </Link>

      </div>

      <div className='Sugestions'>

        <div className='SugestionsTitle'>
          Sugestii
        </div>

        {sugestions.map(Element => 
          <CardItem item={Element}/>
          
          )}
      </div>


    </div>
  );
  
}

export default Home;
