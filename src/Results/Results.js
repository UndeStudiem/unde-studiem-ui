import React from 'react';
import './Results.scss';
import CardItem4 from '../Card/CardItem4'
import CardItem2 from '../Card/CardItem2'
import CardItem3 from '../Card/CardItem3'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useLocation } from "react-router-dom";
import Filter from './Filter'
import axios from 'axios'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function Results(props) {
  let query = useQuery();


  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    let callString = `${process.env.REACT_APP_URL}/` 
                      + `${query.get("type")}?page=0&size=1000`
                      + `${query.get("name") ? '&name=' + query.get("name") : '' }`
                      + `${query.get("degree") ? '&degree=' + query.get("degree") : '' }`
                      + `${query.get("cities") ? '&cities=' + query.get("cities") : '' }`
                      + `${query.get("fields") ? '&fields=' + query.get("fields") : '' }`

    axios.get(callString)
    .then(response => {
      setList(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (
    <div className="Results">

      <div className='Pagetitle'>
        <Link to={`/`}>
          <Button variant="contained" size="large" color="primary">
            <ArrowBack fontSize="large"/>
            &nbsp;
            Inapoi la pagina principala
          </Button>
        </Link>

      </div>

      
      <Filter degree={query.get("degree")} fields={query.get("fields").split('-')} cities={query.get("cities").split('-')}/>

      <div className='Results-list'>

        <div className='Result-title'>
          Rezultate &nbsp;{query.get("type") == 'program' ? 'programe de studiu'
                            : query.get("type") == 'college' ? 'facultati'
                            : 'universitati'}
        </div>

        {list.map(Element => 
          query.get("type") == 'program' ? <CardItem2 item={Element}/>
          : query.get("type") == 'college' ? <CardItem3 item={Element}/>
          : <CardItem4 item={Element}/>
          
          )}
      </div>


    </div>
  );
  
}

export default Results;
