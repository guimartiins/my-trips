import { NextSeo } from 'next-seo'

import { LinkWrapper } from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map').then((mod) => mod.Map), {
  ssr: false
})

export const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map the places that I want to visit."
        canonical="https://my-trips.castmoon.com.br"
        openGraph={{
          url: 'https://my-trips.castmoon.com.br',
          images: [
            {
              url: 'https://my-trips.castmoon.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My trips',
              type: 'image/png'
            }
          ],
          siteName: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
