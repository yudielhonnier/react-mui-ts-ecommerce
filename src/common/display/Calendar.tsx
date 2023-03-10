import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

export default function Calendar() {
  const [value, setValue] = useState('second');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label='Basic example'
        value={value}
        onChange={(newValue) => {
          console.log('newValue', newValue);
          const hours = new Date();
          setValue(newValue as string);
        }}
      />
    </LocalizationProvider>
  );
}
