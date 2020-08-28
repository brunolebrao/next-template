import React from 'react'
import Head from 'next/head'

import dev from '../assets/dev.png'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Dev</title>
      </Head>
      <main>
        <Container>
          <h1>Hello </h1>
          <img src={dev} alt="Logo dev" />
          <p>Initial Project NextJs</p>
        </Container>
      </main>
    </div>
  )
}
export default Home
