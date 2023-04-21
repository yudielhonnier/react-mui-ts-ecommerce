import { IconButton, IconButtonProps, styled } from '@mui/material';

interface IIconButton extends IconButtonProps {
  colorIcon?: string;
}

export const SytledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IIconButton>(({ colorIcon, theme }) => ({
  outline: '0px !important',
  color: colorIcon ? theme.palette.mode : 'white',
}));
