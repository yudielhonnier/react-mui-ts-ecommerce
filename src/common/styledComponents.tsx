import { TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '2.5rem',
    padding: '1rem 0',
  },
}));
