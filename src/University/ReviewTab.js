import React from 'react';
import CardItemReviewUni from '../Card/CardItemReviewUni';
import axios from 'axios'


let reviews2 = [
  {
    universityOpinion: 'Foarte greu, nu merita este grea extrem de grea bla bla aaaa fsfsf ceva ceva aaaaaaaaaa aaaaaa aaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa',
    programStarGrade: 9
  },
  {
    universityOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  },
  {
    universityOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  }, 
  {
    universityOpinion: 'Foarte greu, nu merita',
    programStarGrade: 9
  }, 

]

export default function ReviewTab(props) {

  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/forumpost?universityId=${props.university._id}`)
    .then(response => {
      setReviews(response.data);
    })
    .catch(error => alert("error"));

  }, []);
  return (

    <div className='ReviewTab'>

    {reviews.map(Element =>
    <CardItemReviewUni item={Element}/>
      )}
    </div>



  );
}
