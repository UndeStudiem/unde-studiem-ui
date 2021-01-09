import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import './CardItem.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardItem(props) {
  const classes = useStyles();

  return (
    <div className='CardItem'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/toca.jpg"
            title={props.item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/college/${props.item._id}`}>
            <Button size="small" color="primary">
              Afla mai multe
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>

  );
}
