import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import DashboardLayout from '../layouts/DashboardLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return <DashboardLayout>
    <Component {...pageProps} />
  </DashboardLayout>
}
export default MyApp
