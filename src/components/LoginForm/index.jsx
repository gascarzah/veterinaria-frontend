import { Avatar, Button, CircularProgress, Container, CssBaseline, Grid, Link,  TextField, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'
import React from 'react';
import { LockOutlined } from "@mui/icons-material";

import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('invalid mail').required('mail is mandatory'),
    password: Yup.string().required('password mandatory').min(5, 'password must at least 5 characters')
})

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: 1,
    //   backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: 1,
    },
    submit: {
      margin: 3,
    },
    circuloBlue: {
      color: '#3f51b5',
    },
    circuloWhite: {
      color: '#fff',
    },
  }));

const LoginForm = () => {
    const classes = useStyles();
    // const { login, loadingLogin, messageLogin } = useContext(UserContext);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            // const {email, password} = values
            // console.log(values)
            // login(values, resetForm);
        }
    })

    return (
        <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Iniciar Sesión
          </Typography>
          <form
            className={classes.form}
            noValidate={true}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Correo'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Grid container style={{ marginTop: '1em' }}>
              <Grid item xs>
                <Link to='/create-account'>Create account</Link>
              </Grid>
            </Grid>
  
            {/* {messageLogin && (
            <Alert severity={messageLogin.code}> {messageLogin.message}</Alert>
          )} */}
  
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            //   endIcon={
            //       loadingLogin ? (
            //           <CircularProgress size={20} className={classes.circuloWhite} />
            //       ):null
            //   }
            >
              Ingresar
            </Button>
          </form>
        </div>
      </Container>
    );
};

export default LoginForm;