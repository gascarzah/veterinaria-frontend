import React from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";


// const theme = createTheme();
const useStyles = makeStyles(() => ({
  paper: {
       marginTop: 1 ,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  avatar: {
    //   margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    //   marginTop: 1,
  },
  submit: {
    //   margin: 3,
  },
  circuloWhite: {
    color: "#fff",
  },
}));

const CreateAccountForm = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear Cuenta
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoComplete="name"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon= {<CircularProgress size={20}/>}
          >
            Crear
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CreateAccountForm;
