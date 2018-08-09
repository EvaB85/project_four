import React from 'react';
import './App.css';
import {
  Grid,
  TextField,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card
} from '@material-ui/core';


const GoalTracker = props => {
  return (
    <div>
      <TextField style={{padding: 24}} />
      <Grid container spacing={24} style={{padding: 24}}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <p>This is a Grid</p>
        </Grid>
      </Grid>


    </div>
  )
}




export default GoalTracker;
