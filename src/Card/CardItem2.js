import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './CardItem.scss'
import Chip from '@material-ui/core/Chip'; 
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 250,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
  },
  subcontent: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    height: 150
  },
  subcontent2: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    width: 500,
    //height: 140
  },
  cell: {
    padding: theme.spacing(1, 2),
    minWidth: 120,
  },
  cover: {
    width: 100,
    height: 100
  },
  data:{
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CardItem2(props) {
  const classes = useStyles();

  return (
    <div className='CardItem2'>

      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/toca.jpg"
          title={props.item.name}
        />
        <div className={classes.details}>
          <div className={classes.content}>
            <CardContent className={classes.subcontent}>
              <Typography component="h6" variant="h6">
                <Link to={`/program/${props.item._id}`}>
                  {props.item.name}
                </Link>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Program de &nbsp;
                { props.item.degree == 'L' ? 'licenta' :
                  props.item.degree == 'M' ? 'masterat' :
                  props.item.degree == 'D' ? 'doctorat' : ''
                }
              </Typography>
              <Typography component="body1" variant="body1">
                {props.item.college.name}
              </Typography>
              <Typography component="body1" variant="body1">
                {props.item.college.university.name}
              </Typography>
              <Typography component="body1" variant="body1">
                <LocationOnIcon />
                {props.item.college.university.city}
              </Typography>
              <br/>
              <Typography component="body1" variant="body1">
                <Chip label={props.item.field} />
                {/* {props.item.fields.map(Element => <><Chip label={Element} /> &nbsp;</>)} */}
              </Typography>
            </CardContent>

            <div className={classes.data}>
              <CardContent className={classes.subcontent2}>

              
              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Limba predare
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.language}
                </Typography>
              </div>


              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Tip invatamant
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.type}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Ani de studiu
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.duration}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Nr semestre
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.organization}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Total credite
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.credits}
                </Typography>
              </div>
            </CardContent>


            <CardContent className={classes.subcontent2}>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Total locuri
                </Typography>
                <br/>
                <Typography component="body1" variant="body1">
                  {props.item.totalPlaces}
                </Typography>
              </div>


              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Locuri buget
                </Typography>
                <Typography component="body1" variant="body1">
                {props.item.taxFreePlaces}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Locuri taxa
                </Typography>
                <br/>
                <Typography component="body1" variant="body1">
                {props.item.taxPlaces}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Taxa anuala
                </Typography>
                <Typography component="body1" variant="body1">
                  
                  {props.item.tax}
                </Typography>
              </div>

              <div className={classes.cell}>
                <Typography variant="body1" color="textSecondary">
                  Modalitate admitere
                </Typography>
                <Typography component="body1" variant="body1">
                  {props.item.admissionType}
                </Typography>
              </div>

            </CardContent>
            </div>
          </div>

          {/* <div className={classes.controls}>
            <Button aria-label="previous">
              ceva
            </Button>
            <Button aria-label="play/pause">
              ceva
            </Button>
            <Button aria-label="next">
              ceva
            </Button>
          </div> */}
        </div>
      </Card>
    </div>

  );
}
