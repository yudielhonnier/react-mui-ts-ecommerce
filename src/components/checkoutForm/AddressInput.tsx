import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import { IAddressInputProps } from "@/types/payment.types";

const AddressInput = ({ name, label, required }: IAddressInputProps) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        defaultValue=""
        name={name}
        render={({ field }) => (
          <TextField
            fullWidth
            {...field}
            id=""
            label={label}
            required={required}
          />
        )}
        rules={{ required: true }}
      />
    </Grid>
  );
};

export default AddressInput;
