import { Layout } from '@/components/layouts';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';

export default function App({ Component, pageProps, ...rest }: AppProps) {
  console.log({ rest });
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const { theme } = appContext.ctx.req
    ? (appContext.ctx.req as any).cookies
    : { theme: 'light' };
  // console.log(cookies);

  const validThemes = ['light', 'dark', 'custom'];

  return { theme: validThemes.includes(theme) ? theme : 'light' };
};
