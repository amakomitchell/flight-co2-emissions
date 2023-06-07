import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { AIRPORTS } from '../types/airports';
import { CarbonEmisssionFormType } from '../types/emission-form-type';
import { getCarbonEmission } from '../utils/get-carbon-emission.util';
import { EmissionsDisplay } from './EmissionsDisplay';
import { CarbonEmissionFormSchema } from '../utils/emission-form-validation-schema';

export const CarbonEmissionForm = () => {
  const [emissions, setEmissions] = useState<number | null>(null);

  const { values, isValid, setFieldValue, submitForm } =
    useFormik<CarbonEmisssionFormType>({
      initialValues: {
        departure: '',
        destination: '',
        tripType: '1',
        numOfTravelers: 1,
      },
      validationSchema: CarbonEmissionFormSchema,
      onSubmit: async (values) => {
        const co2emission = await getCarbonEmission(values);
        setEmissions(co2emission);
      },
      validateOnMount: true,
    });

  return (
    <Box display="flex">
      <Box width="37.5rem" paddingLeft="1.875rem" paddingTop="6.25rem">
        <Paper elevation={3}>
          <Box
            display="flex"
            flexDirection="column"
            padding="0.625rem 3.125rem 1.25rem"
          >
            <h2>Carbon Emission Calculator</h2>
            <Box display="flex">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  From / Departure*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={values.departure}
                  onChange={(event) => {
                    setFieldValue('departure', event.target.value);
                  }}
                  label="From / Departure"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {AIRPORTS.map((airport) => {
                    const isDisabled = airport === values.destination;
                    return (
                      <MenuItem
                        key={airport}
                        value={airport}
                        disabled={isDisabled}
                      >
                        {airport}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  To / Destination*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={values.destination}
                  onChange={(event) => {
                    setFieldValue('destination', event.target.value);
                  }}
                  label="To / Destination"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {AIRPORTS.map((airport) => {
                    const isDisabled = airport === values.departure;
                    return (
                      <MenuItem
                        key={airport}
                        value={airport}
                        disabled={isDisabled}
                      >
                        {airport}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            <Box display="flex" marginTop="1.563rem">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Type*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={values.tripType}
                  onChange={(event) => {
                    setFieldValue('tripType', event.target.value);
                  }}
                  label="Type"
                >
                  <MenuItem value="1">One way</MenuItem>
                  <MenuItem value="2">Return trip</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ m: 1, minWidth: 180 }}
                type="number"
                label="Number of travellers*"
                variant="standard"
                value={values.numOfTravelers}
                onChange={(event) => {
                  const newVal = Number(event.target.value);
                  if (newVal > 0) {
                    setFieldValue('numOfTravelers', newVal);
                  }
                }}
              />
            </Box>

            <Box marginTop="1.563rem">
              <Button
                variant="contained"
                disabled={!isValid}
                onClick={submitForm}
              >
                Calculate Emission
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box width="37.5rem" paddingLeft="5rem">
        {emissions && (
          <EmissionsDisplay
            emissions={emissions}
            departure={values.departure}
            destination={values.destination}
          />
        )}
      </Box>
    </Box>
  );
};
