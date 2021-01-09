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
    height: 200,

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
    width: 150,
    height: 150
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
                <Link to={`/university/${props.item._id}`}>
                  {props.item.name}
                </Link>
              </Typography>
              <Typography component="body1" variant="body1">
                <LocationOnIcon />
                {props.item.city}
              </Typography>
              <br/>
            </CardContent>
            {/* <CardContent className={classes.subcontent}>
              <Typography component="body1" variant="body1">
                {props.item.description}
              </Typography>
            </CardContent> */}

          </div>


        </div>
      </Card>
    </div>

  );
}
