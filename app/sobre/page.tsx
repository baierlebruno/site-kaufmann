import type { Metadata } from 'next'
import { AboutContent } from '../site-components'

export const metadata: Metadata = { title: 'Sobre | Auto Som Kaufmann', description: 'Conheça a história da Auto Som Kaufmann, referência em som automotivo, acessórios e películas em Toledo desde 1985.' }

export default function AboutPage() {
  return <AboutContent />
}
