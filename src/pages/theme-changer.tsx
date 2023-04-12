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
import React, { ChangeEvent, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

const ThemeChangerPage: NextPage = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
    Cookies.set('theme', e.target.value);
  };

  //Las cookies tienen solo 4k de almacenamiento, pero permiten enviarlas al back en requestTime

  useEffect(() => {
    console.log(localStorage.getItem('theme'));
  }, []);

  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup value={currentTheme} onChange={onThemeChange}>
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
