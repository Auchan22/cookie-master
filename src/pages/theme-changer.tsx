import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { NextPage, GetServerSideProps } from 'next';
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import Cookies from 'js-cookie';

type validTheme = 'light' | 'dark' | 'custom';
interface Props {
  theme: validTheme;
}

const ThemeChangerPage: NextPage<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(theme);

  const onThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
    Cookies.set('theme', e.target.value);
  };

  const handleClick = async () => {
    const { data } = await axios.get('/api/hello');
    console.log(data);
  };

  //Las cookies tienen solo 4k de almacenamiento, pero permiten enviarlas al back en requestTime

  useEffect(() => {
    // console.log(localStorage.getItem('theme'));
    console.log('Cookies: ', Cookies.get('theme'));
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
        <Button onClick={handleClick}>Request</Button>
      </CardContent>
    </Card>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light' } = req.cookies;

  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'light',
    },
  };
};

export default ThemeChangerPage;
