<<<<<<< HEAD
import { Theme, IconButton, IconButtonProps, styled } from '@mui/material';
=======
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
>>>>>>> 6d42ad3 (fix: lint fix)

interface IIconButton {
  colorIcon?: string;
}

export const SytledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IIconButton>(({ theme, colorIcon }) => ({
  outline: '0px !important',
<<<<<<< HEAD
  color: colorIcon ?? 'white',
=======
>>>>>>> 6d42ad3 (fix: lint fix)
}));
