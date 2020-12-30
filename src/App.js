import './App.css';
import { Fab, Container, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React,{useState, useEffect} from 'react'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
  },
  add:{
     position:"fixed",
     bottom:"5%",
     right:"5%",
     zIndex:theme.zIndex.tooltip
  }
}));

function App() {
  const [User, setUser] = useState([]);
  const classes = useStyles();

  const loadUsers = async () =>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(result.data)
  }

  useEffect(()=>{
    loadUsers();
  },[])
  return (
    <Container className={classes.root}>
      <Fab variant="extended" color="primary" className={classes.add}><AddIcon/>Create User</Fab>
      <Grid container spacing={5}> 
          {User.map((user)=>(
            <Grid item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
                  <CardContent>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="h6">{user.email}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" color="primary">Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default App;
