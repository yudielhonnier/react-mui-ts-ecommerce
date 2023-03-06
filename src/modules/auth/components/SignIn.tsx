import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { TypographyProps } from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import useAuthFunctions from '../hooks/useAuthFunctions';
import useSignIn from '../hooks/useSignIn';

function Copyright(props: TypographyProps) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Yudiel Robert
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthFunctions();
  // TODO: here it possible destructure isLoading
  const { signIn, isLoading } = useSignIn();

  // TODO:SEE WHAT TO DO WITH THIS FUNCTION
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();

    const data = new FormData(ev.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    signIn({ email, password })
      .then(login)
      .catch((err) => alert(err.message));
  };

  const signinSubmit = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            // onClick={(e) => signinSubmit(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <RouteLink to='/signup'>{"Don't have an account? Sign Up"}</RouteLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
