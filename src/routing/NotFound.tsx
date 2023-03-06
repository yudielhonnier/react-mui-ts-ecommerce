import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

import useSetHelp from '@/common/feedback/useSetHelp';

export default function NotFound() {
  const { t } = useTranslation('routes');
  const setHelp = useSetHelp();
  setHelp(<Typography>{t('404help')}</Typography>);

  // return <Result status='404' title={t('404')} />;
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
        404
      </Typography>
      <Typography variant='h6' style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant='contained'>Back Home</Button>
    </Box>
  );
}
