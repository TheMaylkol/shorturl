import { Container } from '@/ui/Container'
import { Text } from '@/ui/Text'

import { ShortUrlItem } from '@/components/ShortUrlItem'

import { useShortenUrl } from '@/store/ShortenUrlStore'

export function ShortUrlList () {
  const { state: links } = useShortenUrl()

  return (
    <div>
      <div className="border-y border-neutral-800 h-16 justify-center flex items-center">
        <Text className="text-sm" priority="low">
          Acordator de URL
        </Text>
      </div>
      <div className="py-20">
        <Container size="smaller">
          <h2 className="text-3xl text-center font-bold mb-2">
            Todos tus enlances
          </h2>
          <Text priority="medium" className="mb-10 text-center text-sm leading-6">
            Recuerda que todos los enlaces se almacenan localmente, así que ten mucho cuidado.
          </Text>
        </Container>
        <Container size="small">
          {
            links.map(({ alias, url }) => (
              <ShortUrlItem
                key={alias}
                original={url}
                shorten={alias}
              />
            ))
          }
        </Container>
      </div>
    </div>
  )
}
