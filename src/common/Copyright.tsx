import { TypographyProps, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
