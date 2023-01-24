import { Coffee, Heart } from 'react-feather'

import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

export function Footer () {
  return (
    <div className="border-t border-neutral-800">
      <Container className="h-16 flex items-center justify-center">
        <Text priority="low" className="flex items-center text-sm">
          Desarrollado con el <Heart className="mx-2" /> Y un poco de <Coffee className="mx-2" /> por: <a href="https://www.reburn.dev" className="mx-2 font-bold text-white" rel="noopener noreferrer" target="_blank">reburn.dev</a>
        </Text>
      </Container>
    </div>
  )
}
