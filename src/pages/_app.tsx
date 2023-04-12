import { Layout } from '@/components/layouts';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';
import type { AppContext, AppProps } from 'next/app';
import { useEffect, useState } from 'react';

interface Props extends AppProps {
  theme: string;
}
export default function App({ Component, pageProps, theme }: Props) {
  // console.log({ theme });

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light;';

    const selectedTheme: Theme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// App.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req
//     ? (appContext.ctx.req as any).cookies
//     : { theme: 'light' };
//   // console.log(theme);

//   const validThemes = ['light', 'dark', 'custom'];

//   return { theme: validThemes.includes(theme) ? theme : 'light' };
// };
