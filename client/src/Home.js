import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
          <Paper className="paper">
    				<h3>ONE Home</h3>

            

    			</Paper>
        </div>
        <div className="root">
          <Grid container >
            <Grid item xs={12}>
              <p className="grid" >GRID in Home</p>
            </Grid>
          </Grid>
          <Grid container spacing={24} className="name">
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
