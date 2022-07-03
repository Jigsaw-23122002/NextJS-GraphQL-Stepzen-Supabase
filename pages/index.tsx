import type { NextPage } from 'next'
import Head from 'next/head'
import Postbox from '../components/Postbox'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>
      <Postbox/>
    </div>
  )
}

export default Home
