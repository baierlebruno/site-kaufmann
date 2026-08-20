import type { Metadata } from 'next'
import { ReviewsContent } from '../site-components'

export const metadata: Metadata = { title: 'Avaliações | Auto Som Kaufmann', description: 'Veja avaliações de clientes da Auto Som Kaufmann em Toledo.' }

export default function ReviewsPage() {
  return <ReviewsContent />
}
