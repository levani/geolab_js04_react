import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 30
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  btn: {
    color: '#fff'
  }
});

const limit = 4;

export default function Home() {
  const classes = useStyles();
  const params = useParams();
  let page = params.page || 1;
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState();

  page = parseInt(page);

  const totalPages = Math.ceil(totalPosts / limit);

  useEffect(() => {
    axios.get('http://localhost:3030/posts', {
      params: {
        _page: page,
        _limit: limit
      }
    }).then(response => {
      setPosts(response.data);
      setTotalPosts(response.headers['x-total-count']);
    }).catch(error => {
      console.log(error);
    })
  }, [page]);

  return (
    <div>
      {
        posts.map((item) => (
          <Card key={item.id} className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" component="p">
                {/* {item.content.substring(0, 150) + '...'} */}
                {item.content.split(' ').splice(0, 30).join(' ') + '...'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to={'/blog/show/' + item.id}
                size="small"
              >
                მეტის წაკითხვა
              </Button>
            </CardActions>
          </Card>
        ))
      }
      {/* <Link to={'/blog/' + (page - 1)}>Prev page</Link>
      <Link to={'/blog/' + (page + 1)}>Next page</Link> */}
      <Button 
        component={Link}
        to={'/blog/' + (page - 1)}
        className={classes.btn}
        disabled={page <= 1}
      >
        წინა გვერდი
      </Button>
      <Button
        component={Link}
        to={'/blog/' + (page + 1)}
        className={classes.btn}
        disabled={page >= totalPages}
      >
        შემდეგი გვერდი
      </Button>
    </div>
  );
}