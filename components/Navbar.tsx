import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

import { Coffee, GitHub, Twitter } from 'react-feather'

export function Navbar () {
  return (
    <div className="z-10 sticky top-0 backdrop-blur-sm bg-neutral-900/90 border-b border-neutral-800">
      <Container className="h-16 flex items-center">
        <Text priority="medium">
          <a href="https://www.radiofavorita.cl" target="_blank" rel="noopener noreferrer">
            RADIO FAVORITA FM
          </a>
        </Text>
      </Container>
    </div>
  )
}
