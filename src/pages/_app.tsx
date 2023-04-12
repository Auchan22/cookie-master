import { Layout } from '@/components/layouts';
import { customTheme, darkTheme, lightTheme } from '@/themes';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import type { AppContext, AppProps } from 'next/app';

interface Props extends AppProps {
  theme: string;
}
export default function App({ Component, pageProps, theme }: Props) {
  // console.log({ theme });

  const currentTheme: Theme =
    theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;

  return (
    <ThemeProvider theme={currentTheme}>
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
  // console.log(theme);

  const validThemes = ['light', 'dark', 'custom'];

  return { theme: validThemes.includes(theme) ? theme : 'light' };
};
