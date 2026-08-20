import {
  AboutContent,
  ContactContent,
  HomeContent,
  ProductsContent,
  ReviewsContent,
  ServicesContent,
} from './site-components'

export default function HomePage() {
  return (
    <>
      <HomeContent />
      <AboutContent />
      <ServicesContent />
      <ProductsContent />
      <ReviewsContent />
      <ContactContent />
    </>
  )
}
