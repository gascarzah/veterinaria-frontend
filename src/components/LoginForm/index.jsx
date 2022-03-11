import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { LockOutlined } from "@mui/icons-material";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/Auth";
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("mail is mandatory"),
  password: Yup.string()
    .required("password mandatory")
    .min(5, "password must at least 5 characters"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
    //   backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
  circuloBlue: {
    color: "#3f51b5",
  },
  circuloWhite: {
    color: "#fff",
  },
}));

const LoginForm = () => {
  const state = useSelector((state) => state);
  const { authReducer } = state;
  const { messageLogin, loadingLogin } = authReducer;

  const classes = useStyles();

  const ejecutar = (valores, resetForm) => {
    dispatch(login(valores, resetForm));
  };

  const dispatch = useDispatch();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(valores, { resetForm }) => {
            ejecutar(valores, resetForm);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
            
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Correo"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={props.handleChange}
                value={props.values.username}
                error={props.touched.username && Boolean(props.errors.username)}
                helperText={props.touched.username && props.errors.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={props.handleChange}
                value={props.values.password}
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
              />
              <Grid container style={{ marginTop: "1em" }}>
                <Grid item xs>
                  <Link to="/create-account">Create account</Link>
                </Grid>
              </Grid>

              {/* {console.log('messageLogin')}
              {console.log(messageLogin)} */}
              {messageLogin  && (
                <Alert severity={messageLogin.code}>
                  {" "}
                  {messageLogin.message}
                </Alert>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                endIcon={
                  loadingLogin ? (
                    <CircularProgress
                      size={20}
                      className={classes.circuloWhite}
                    />
                  ) : null
                }
              >
                Ingresar
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default LoginForm;
