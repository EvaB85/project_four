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

            <div class="row">
              <div class="col s12 m4 offset-m4">
                <div class="card">

                  <div class="card-action team lighten-1 white-text">
                    <h3>Login Form</h3>
                  </div>
                  <div class="card-content">
                    <div class="form-field">
                      <label for ="username">Username</label>
                      <input type="text" id="username">
                      </div><br>
                  <div class="form-field">
                    <button class="btn-large waves-effect waves-dark" style="width=100%;">Login</button>
                  </div><br>
                    </div>

                </div>
              </div>
            </div>



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
