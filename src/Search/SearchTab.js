import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';


import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

let allFields = [
  'Drept', 'Finante', 'Contabilitate', 'Tehnologia informatiei', 'Stiinte', 'Matematica', 'IT', 'Economie'
];

let allCities = [
  'București', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Brașov', 'Constanța'
]



export default function SearchTab(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    degree: '',
    fields: [],
    cities: [],
    name: [],

  });


  const handleChange = (prop) => (event) => {

    setValues({ ...values, [prop]: event.target.value });
  };

  return (

    <div className='SearchTab'>

      {props.type === 0 ?
       <FormControl className={classes.formControl}>
        <InputLabel id="degree-label">Tip studii</InputLabel>
        <Select
          labelId="degree-label"
          id="degree"
          value={values.degree}
          onChange={handleChange('degree')}
        >
          <MenuItem value={'L'}>Licenta</MenuItem>
          <MenuItem value={'M'}>Master</MenuItem>
          <MenuItem value={'D'}>Doctorat</MenuItem>
        </Select>
      </FormControl>
      : 
      <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="Nume" />
      </FormControl>


      }

      <FormControl className={classes.formControl}>
      <InputLabel id="city-label">Oras</InputLabel>
        <Select
          labelId="city-label"
          id="city"
          multiple
          value={values.cities}
          onChange={handleChange('cities')}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {allCities.map(Element => 
              <MenuItem value={Element}>{Element}</MenuItem>
            )}
        </Select>
      </FormControl>

      {props.type === 0 || props.type === 1 ? 
      <>
        <FormControl className={classes.formControl}>
          <InputLabel id="fields-label">Domeniu</InputLabel>
          <Select
            labelId="fields-label"
            id="fields"
            multiple
            value={values.fields}
            onChange={handleChange('fields')}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
          >

            {allFields.map(Element => 
                <MenuItem value={Element}>{Element}</MenuItem>
              )}
          </Select>
        </FormControl>
      </>
      : ''}


      <br/><br/><br/>
      <Link to={`/results?type=${props.type == 0 ? 'program' : props.type == 1 ? 'college' : 'university'}&` +
                `degree=${values.degree}&` +
                `fields=${values.fields.reduce((a,b) => a + '-' + b, '')}&` +
                `cities=${values.cities.reduce((a,b) => a + '-' + b, '')}&` +
                `name=${values.name}` }>
        <Button variant="contained" color="primary" size="large">
          Cauta
        </Button>
      </Link>


    </div>



  );
}
