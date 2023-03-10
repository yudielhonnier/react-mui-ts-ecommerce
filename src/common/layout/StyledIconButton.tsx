import { Theme, IconButton, alpha } from '@mui/material';
import styled from '@emotion/styled';

interface IIconButton {
  theme: Theme;
  coloricon?: string;
}

export const SytledIconButton = styled(IconButton)(({ theme, coloricon }: IIconButton) => ({
  outline: '0px !important',
  color: coloricon ?? 'white',
}));
