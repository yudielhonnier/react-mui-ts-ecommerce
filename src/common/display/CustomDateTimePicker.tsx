import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { Box, styled, TextField } from '@mui/material';

const StyledDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
  borderRadius: ' 0 0 8px 8px',
  backgroundColor: 'red',
  '& .MuiInputBase-root': {
    height: '30px',
  },
}));

export default function CustomDateTimePicker() {
  const [value, setValue] = useState('second');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDateTimePicker
        label='Basic example'
        value={value}
        onChange={(newValue) => {
          console.log('newValue', newValue);
          const hours = new Date();
          setValue(newValue as string);
        }}
        slots={{}}
      />
    </LocalizationProvider>
  );
}
