import { AppProps } from 'next/app';
import { StoryProvider } from '@storyofams/storyblok-toolkit';

function App({ Component, pageProps }: AppProps) {
  return (
    <StoryProvider>
      <Component {...pageProps} />
    </StoryProvider>
  );
}

export default App;
