import { Grid, Paper } from '@mui/material';
import React from 'react';
import fondo from '../assets/image/fondo-mesa.jpg'
import LoginForm from '../components/LoginForm';

const SignIn = () => {


    return (
        <div>
             <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={fondo}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='fondo'
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justify='center'
          alignContent='center'
          style={{ padding: 10 }}
        >
          <Grid container justify='center' style={{display: 'flex', justifyContent: 'center' }}>
            <Paper square>
              <LoginForm />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
        </div>
    );
};

export default SignIn;