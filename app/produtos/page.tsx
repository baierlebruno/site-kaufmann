import type { Metadata } from 'next'
import { ProductsContent } from '../site-components'

export const metadata: Metadata = { title: 'Produtos | Auto Som Kaufmann', description: 'Alto-falantes, subwoofers, centrais multimídia, módulos, alarmes, acessórios automotivos e películas.' }

export default function ProductsPage() {
  return <ProductsContent />
}
