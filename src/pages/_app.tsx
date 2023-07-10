//? Layout 
import RootLayout from '@/components/RootLayout'

//? redux store 
import { store, persistor } from '@/store/store';

//? global styles
import '@/styles/globals.css'

//? typescript types
import type { AppProps } from 'next/app'

//? redux
import { Provider } from 'react-redux';

//? react responsive carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";

//? redux persist 
import { PersistGate } from 'redux-persist/integration/react'

//? next-auth
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider session={session}>
          <div className='font-bodyFont bg-gray-300'>
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}
