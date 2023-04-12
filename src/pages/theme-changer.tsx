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
import { NextPage } from 'next';
import React, { ChangeEvent, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

const ThemeChangerPage: NextPage = (props) => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  console.log({ props });

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
import { GetServerSideProps } from 'next';
import { Cookie } from 'next/font/google';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = 'light' } = req.cookies;

  return {
    props: {
      theme,
    },
  };
};

export default ThemeChangerPage;
