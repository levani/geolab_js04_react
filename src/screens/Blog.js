import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from "./Home";
import Post from "./Post";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";

const useStyles = makeStyles({

});

export default function Blog() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Switch>
            <Route path="/blog/show/:post_id">
              <Post />
            </Route>
            <Route path="/blog/:page?">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Grid>
        <Grid item md={4} xs={12}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  )
}