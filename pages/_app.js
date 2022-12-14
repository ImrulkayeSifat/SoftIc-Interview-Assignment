import '../styles/globals.css'
import { StoreProvider } from 'easy-peasy';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
