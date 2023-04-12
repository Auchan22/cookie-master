import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';

const ThemeChangerPage: NextPage = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup
            value={currentTheme}
            defaultValue='light'
            onChange={onThemeChange}
          >
            <FormControlLabel value='light' control={<Radio />} label='Light' />
            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
            <FormControlLabel
              value='custom'
              control={<Radio />}
              label='Custom'
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default ThemeChangerPage;
