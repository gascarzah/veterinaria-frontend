import React from 'react';
import { Grid, Paper } from '@mui/material';
import fondo from '../assets/image/fondo-mesa.jpg';
import CreateAccountForm from '../components/CreateAccountForm';

// import CreateAccountForm from '../Components/CreateAccountForm';

const SignUp = () => {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          
          alignItems='center'
          style={{ padding: 10 }}
        >
          <Grid container content='center'style={{display: 'flex', justifyContent: 'center' }} >
            <Paper square>
              <CreateAccountForm />
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            src={fondo}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt='fondo'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
