import React from 'react';
import axios from 'axios'
import CardItemReview from '../Card/CardItemReview';

let reviews2 = [
  {
    programOpinion: 'Foarte greu, nu merita este grea extrem de grea bla bla aaaa fsfsf ceva ceva aaaaaaaaaa aaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa',
    programStarGrade: 9
  },
  {
    programOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  },
  {
    programOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  }, 
  {
    programOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  }, 

]

export default function ReviewTab(props) {

  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/forumpost?programId=${props.program._id}`)
    .then(response => {
      setReviews(response.data);
    })
    .catch(error => alert("error"));

  }, []);

  return (

    <div className='ReviewTab'>

    {reviews.map(Element =>
    <CardItemReview item={Element}/>
      )}



    </div>



  );
}
