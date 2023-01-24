import type { NextPage } from 'next'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ShortUrlList } from '@/components/ShortUrlList'
import { ShortUrlForm } from '@/components/ShortUrlForm'

import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

const Home: NextPage = () => {
  return (
    <div className="text-white min-h-screen bg-neutral-900 leading-7 selection:bg-blue-500 selection:text-white">
      <Navbar />

      <Container className="py-14 min-h-[calc(100vh-130px)]" size="small">
        <h2 className="font-bold text-4xl mb-4 text-center">
          Acortador URL Radio Favorita FM
        </h2>
        <Text priority="medium" className="text-center">
          Acortador de uso libre.
        </Text>

        <ShortUrlForm />
      </Container>

      <ShortUrlList />

      <Footer />
    </div>
  )
}

export default Home
