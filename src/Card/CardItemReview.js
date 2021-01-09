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
import './CardItemReview.scss'


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
    flexDirection: 'row'
  },
}));

export default function CardItemReview(props) {
  const classes = useStyles();

  return (
    <div className='CardItemReview'>

      <Card className={classes.root}>
        <div className={classes.details}>
          <div className={classes.content}>
            <CardContent className={classes.subcontent}>
              <Typography component="h6" variant="h6">
                  {props.item.programOpinion}
              </Typography>
              {/* <Typography component="body1" variant="body1">
                {props.item.author}
              </Typography> */}
              <Typography component="body1" variant="body1">
                {props.item.programStarGrade} / 5
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
