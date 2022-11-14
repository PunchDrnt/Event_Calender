import Layout from '@components/layout'
import ContextWrapper from 'context/ContextWrapper'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  )
}

export default MyApp
