import { Theme, IconButton, IconButtonProps, styled } from '@mui/material';

interface IIconButton {
  colorIcon?: string;
}

export const SytledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IIconButton>(({ theme, colorIcon }) => ({
  outline: '0px !important',
  color: colorIcon ?? 'white',
}));
