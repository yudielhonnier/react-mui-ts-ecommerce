import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function RouteError() {
<<<<<<< HEAD
  // TODO:USE THIS t variable
=======
>>>>>>> 6d42ad3 (fix: lint fix)
  const { t } = useTranslation('routes');
  // return <Result status='500' title={t('500')} />;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: (theme) => theme.palette.primary,
      }}
    >
      <Typography variant='h1' style={{ color: 'white' }}>
        500
      </Typography>
      <Button variant='contained'>Back Home</Button>
    </Box>
  );
}
