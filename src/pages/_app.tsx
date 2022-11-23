import { AppProps } from 'next/app';
import ThemeProvider from '@/context/ThemeProvider';
import UserProvider from '@/context/UserProvider';
import LoginFormProvider from '@/context/LoginFormProvider';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import PlaidTokenProvider from '@/context/PlaidTokenProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <PlaidTokenProvider>
          <ThemeProvider>
            <UserProvider>
              <LoginFormProvider>
                <Component {...pageProps} />
              </LoginFormProvider>
            </UserProvider>
          </ThemeProvider>
        </PlaidTokenProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
