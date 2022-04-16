import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useAddRegisterApplicantMutation } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme?: any) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: '450px',
  },
  paperIcon: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignitems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  paddingTop: {
    marginTop: theme.spacing(2),
  },
}));

type Inputs = {
  username: string;
  email: string;
  password: string;
  password2: string;
  avatar: string;
  postingrole_user: string;
  generalrole_user: string;
};

function RegisterApplicant() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [addRegisterApplicant] = useAddRegisterApplicantMutation();

  const defaultValues = {
    username: '',
    email: '',
    password: '',
    password2: '',
    avatar: 'https://cdn.fakercloud.com/avatars/vladarbatov_128.jpg',
    postingrole_user: 'applicant',
    generalrole_user: 'user',
  };
  const {
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = ({
    username,
    email,
    password,
    postingrole_user = 'applicant',
    generalrole_user = 'user',
    avatar = 'https://cdn.fakercloud.com/avatars/vladarbatov_128.jpg',
  }) => {
    addRegisterApplicant({
      username,
      email,
      password,
      postingrole_user,
      generalrole_user,
      avatar,
    })
      .unwrap()
      .then((payload) => localStorage.setItem('token', payload.token))
      .catch((error) => console.error('rejected', error));
  };
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} className={classes.paperIcon}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Register </Typography>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  defaultValue={defaultValues.username}
                  name="username"
                  control={control}
                  rules={{
                    required: 'Your Username is required',
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.username}
                      helperText={!!errors.username && errors.username.message}
                      label="Username"
                      autoComplete="username"
                      // inputProps={{ 'data-testid': 'username' }}
                      InputLabelProps={{
                        htmlFor: 'username',
                      }}
                      inputProps={{
                        role: 'textbox',
                        'aria-label': 'Username',
                      }}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={defaultValues.email}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Please type in a valid Email address',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.email}
                      helperText={!!errors.email && errors.email.message}
                      label="Email"
                      autoComplete="email"
                      // inputProps={{ 'data-testid': 'email' }}
                      InputLabelProps={{
                        htmlFor: 'email',
                      }}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      inputProps={{
                        role: 'textbox',
                        'aria-label': 'Email',
                      }}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue={defaultValues.password}
                  rules={{ required: 'Password is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.password}
                      helperText={!!errors.password && errors.password.message}
                      label="Password"
                      type="password"
                      autoComplete="new-password"
                      // inputProps={{ 'data-testid': 'password' }}
                      InputLabelProps={{
                        htmlFor: 'password',
                      }}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      inputProps={{
                        role: 'textbox',
                        'aria-label': 'Password',
                      }}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="password2"
                  defaultValue={defaultValues.password2}
                  rules={{
                    required: 'Confirmation is required',
                    validate: (value) =>
                      value === getValues('password') ||
                      'Please type in the same Password',
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirm Password"
                      type="password"
                      autoComplete="new-password"
                      error={!!errors.password2}
                      helperText={
                        !!errors.password2 && errors.password2.message
                      }
                      // inputProps={{ 'data-testid': 'password2' }}
                      InputLabelProps={{
                        htmlFor: 'password2',
                      }}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      inputProps={{
                        role: 'textbox',
                        'aria-label': 'Password2',
                      }}
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item className={classes.paddingTop}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      // data-testid="submit"
                      type="submit"
                      aria-label="Register"
                      disabled={Object.keys(errors).length > 0}
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      data-testid="reset"
                      type="reset"
                      onClick={() => {
                        reset(defaultValues);
                      }}
                    >
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default RegisterApplicant;
