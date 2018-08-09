import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <div class="row">
          <div class="col s12 m4 offset-m4">
            <div class="card">

              <div class="card-action teal lighten-1 white-text">
                <h3>Login form </h3>
              </div>

              <div class="card-content">
                <div class="form-field">
                  <label form="username">Username</label>
                  <input type="text" id="username"></input>
                </div>

                <div class="form-field">
                  <label form="password">Password</label>
                  <input type="password" id="password"></input>
                </div>

                <div class="form-field">
                  <input type="checkbox" id="remem"></input>
                  <label form="remem">Remember Me</label>
                </div>

                <div class="form-field">
                  <button class="btn-large waves-effect waves-dark" style="width=100%">Login</button>


                </div>

              </div>

            </div>
          </div>
        </div>


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
