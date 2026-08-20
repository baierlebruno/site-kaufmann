import type { Metadata } from 'next'
import { ServicesContent } from '../site-components'

export const metadata: Metadata = { title: 'Serviços | Auto Som Kaufmann', description: 'Som automotivo, alarmes, acessórios e aplicação de películas automotivas, residenciais e empresariais em Toledo.' }

export default function ServicesPage() {
  return <ServicesContent />
}
