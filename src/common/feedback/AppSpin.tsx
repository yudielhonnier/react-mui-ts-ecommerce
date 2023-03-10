import { Box, CircularProgress, Stack } from '@mui/material';

function Screen() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <CircularProgress />
    </Box>
  );
}

function Block() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
      <CircularProgress />
    </Box>
  );
}

export default { Screen, Block };
