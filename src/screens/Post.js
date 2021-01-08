import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  title: {
    color: '#fff',
    marginBottom: 20,
  },

  content: {
    color: '#fff',
    marginBottom: 30,
  },

  comment: {
    marginBottom: 20,
  }
});

export default function Post() {
  const classes = useStyles();
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/posts/' + params.post_id)
    .then(response => {
      setPostData(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3030/posts/${params.post_id}/comments`)
    .then(response => {
      setComments(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom component="h2" className={classes.title}>
        {postData.title}
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.content}>
        {postData.content}
      </Typography>
      {
        comments.map(item => (
          <Card key={item.id} className={classes.comment}>
            <CardContent>
              <Typography variant="body2" component="p">
                {item.body}
              </Typography>
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}