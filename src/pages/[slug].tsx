import client from 'graphql/client'
import { GetPageBySlugQuery, PagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { PageTemplate, PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<PagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })
  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
