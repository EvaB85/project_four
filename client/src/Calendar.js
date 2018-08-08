import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <div>
          <Paper className="paper">
    				<h3>ONE Calendar</h3>
    			</Paper>
        </div>
        <div className="root">
          <Grid container >
            <Grid item xs={12}>
              <p className="grid" >GRID in Calendar</p>
            </Grid>
          </Grid>
          <Grid container spacing={24} className="name">
          </Grid>
        </div>
      </div>
    );
  }
}

export default Calendar;
