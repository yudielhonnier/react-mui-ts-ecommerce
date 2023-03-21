import { Box, CircularProgress, Stack, styled, useTheme } from '@mui/material';
import Lottie from 'lottie-react';
import loader from '@/data/Loader.json';
import { Theme } from '@mui/system';

interface IWrapper {
  theme: Theme;
  done: boolean;
}

const FullWrapper = styled(Box)(({ theme, done }: IWrapper) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  height: !done ? '100%' : 0,
  width: '100%',
  transition: 'all 800ms ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
}));

function Screen() {
  const theme = useTheme();
  return (
<<<<<<< HEAD
    <FullWrapper done={false} theme={theme}>
      <Lottie
        // lottieRef={animRef}
        animationData={loader}
        // loop={false}
        // onComplete={onLoopComplete}
      />
    </FullWrapper>
=======
    <div className='flex h-screen items-center justify-center'>
      {/* TODO: ADD SPIN COMPONENT */}
      Spin Component
    </div>
>>>>>>> 6d42ad3 (fix: lint fix)
  );
}

function Block() {
  return (
<<<<<<< HEAD
    <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <CircularProgress />
    </Box>
=======
    <div className='flex justify-center'>
      {/* TODO: ADD SPIN COMPONENT */}
      Spin Component
    </div>
>>>>>>> 6d42ad3 (fix: lint fix)
  );
}

export default { Screen, Block };
