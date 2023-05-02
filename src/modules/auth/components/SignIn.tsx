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
  useTheme,
} from '@mui/material';
import Container from '@mui/material/Container';
import { TypographyProps } from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import useAuthFunctions from '../hooks/useAuthFunctions';
import useSignIn from '../hooks/useSignIn';
import OvalButton from '@/common/buttons/OvalButton';
import { H4 } from '@/common/Typography';
import { tokens } from '@/theme';

export default function SignIn({ onSingIn }: { onSingIn: () => void }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
          {/* <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            // onClick={(e) => signinSubmit(e)}
          >
            Sign In
          </Button> */}
          <OvalButton
            sx={{ mt: 3, mb: 2 }}
            fullWidth
            type='submit'
            background={{
              normal: `${colors.redAccent[500]}`,
              hover: `${colors.greenAccent[500]}`,
            }}
          >
            <H4>Sign in..</H4>
          </OvalButton>
        </Box>
      </Box>
    </Container>
  );
}
