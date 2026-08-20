import type { Metadata } from 'next'
import { ContactContent } from '../site-components'

export const metadata: Metadata = { title: 'Contato | Auto Som Kaufmann', description: 'Entre em contato com a Auto Som Kaufmann e encontre nossa loja em Toledo, Paraná.' }

export default function ContactPage() {
  return <ContactContent />
}
