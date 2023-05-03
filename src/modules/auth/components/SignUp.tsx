import { Box } from '@mui/material';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';

import { auth } from '../services/firebase';
import { StyledTextField } from '@/common/styledComponents';
import OvalButton from '@/common/buttons/OvalButton';
import { H4 } from '@/common/Typography';
import { tokens } from '@/theme';

export default function SignUp() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <OvalButton
              sx={{ mt: 3, mb: 2, height: '2.5rem' }}
              fullWidth
              type='submit'
              background={{
                normal: `${colors.redAccent[500]}`,
                hover: `${colors.greenAccent[500]}`,
              }}
            >
              <H4>Register..</H4>
            </OvalButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
