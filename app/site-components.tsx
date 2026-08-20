'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowRight, BadgeCheck, BellRing, Building2, CalendarDays, Car, CreditCard,
  ExternalLink, MapPin, Menu, Phone, ShieldCheck, Speaker, Star, X,
} from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const whatsapp = 'https://wa.me/554530552473?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Auto%20Som%20Kaufmann%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'
const instagram = 'https://www.instagram.com/kaufmann.som/'
const phone = 'tel:+554530552473'
const maps = 'https://www.google.com/maps/search/?api=1&query=Rua+Adilson+Bier+66+Jardim+Porto+Alegre+Toledo+PR'

const services = [
  { title: 'Som automotivo', text: 'Sistemas de som com alto padrão de qualidade e performance.', image: '/images/svc-som.png', icon: Speaker },
  { title: 'Alarmes e acessórios', text: 'Segurança e praticidade com acessórios das melhores marcas.', image: '/images/svc-alarme.png', icon: BellRing },
  { title: 'Películas automotivas', text: 'Proteção, privacidade e conforto térmico para seu veículo.', image: '/images/svc-pelicula-auto.png', icon: Car },
  { title: 'Películas residenciais e empresariais', text: 'Mais conforto, privacidade e proteção para ambientes.', image: '/images/svc-pelicula-res.png', icon: Building2 },
  { title: 'Aplicação autorizada 3M', text: 'Instalação profissional com películas 3M originais.', image: '/images/svc-3m.png', icon: BadgeCheck },
]

const products = [
  { name: 'Alto-falantes', image: '/images/prod-altofalante.png' },
  { name: 'Subwoofers', image: '/images/prod-subwoofer.png' },
  { name: 'Players e centrais', image: '/images/prod-central.png' },
  { name: 'Módulos amplificadores', image: '/images/prod-modulo.png' },
  { name: 'Alarmes', image: '/images/prod-alarme.png' },
  { name: 'Acessórios automotivos', image: '/images/prod-acessorios.png' },
  { name: 'Películas', image: '/images/prod-pelicula.png' },
]

const brands = [
  { name: 'JBL', file: '/images/logos-marcas-auto-som-kaufmann/jbl.png' },
  { name: 'Bravox', file: '/images/logos-marcas-auto-som-kaufmann/bravox.png' },
  { name: '3M', file: '/images/logos-marcas-auto-som-kaufmann/3m.png' },
  { name: 'Pioneer', file: '/images/logos-marcas-auto-som-kaufmann/pioneer.png' },
  { name: 'Tury', file: '/images/logos-marcas-auto-som-kaufmann/tury.png' },
]

const reviews = [
  ['Rafael', 'Atendimento excelente e serviço impecável! Instalaram meu som e ficou perfeito. Recomendo demais!'],
  ['Juliana', 'Confiança que vem de anos. Produtos de qualidade e profissionais que realmente entendem do que fazem.'],
  ['Lucas', 'Melhor loja de som e acessórios de Toledo. Preço justo, serviço de qualidade e pós-venda fantástico.'],
  ['Carlos', 'Atendimento rápido e muito capricho na instalação. O resultado ficou melhor do que eu esperava.'],
  ['Fernanda', 'Equipe atenciosa, explicou todas as opções e entregou o serviço no prazo combinado.'],
  ['Eduardo', 'Excelente qualidade nos produtos e na instalação. Com certeza voltarei quando precisar.'],
]

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Avaliações', href: '/avaliacoes' },
  { label: 'Contato', href: '/contato' },
]

function Logo({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <div className={`logo logo-fallback ${className}`}><span>AUTO SOM</span><strong>KAUFMANN</strong></div>
  }
  return <img src="/images/logo-auto-som-kaufmann.png" alt="Auto Som Kaufmann" className={`logo-img ${className}`} onError={() => setFailed(true)} />
}

function Fachada() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <div className="about-image about-fallback" role="img" aria-label="Auto Som Kaufmann"><span>AUTO SOM</span><strong>KAUFMANN</strong></div>
  }
  return <img src="/images/fachada-auto-som-kaufmann.jpg" alt="Fachada da Auto Som Kaufmann em Toledo" className="about-image about-img" onError={() => setFailed(true)} />
}

function BrandLogo({ name, file }: { name: string; file: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="brand-item">
      {failed ? <span className="brand-name">{name}</span> : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt={name} data-brand={name.toLowerCase()} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(false)
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname === `${href}/`)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" onClick={close} aria-label="Auto Som Kaufmann - início"><Logo /></Link>
        <nav id="main-navigation" className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={close} className={isActive(item.href) ? 'active' : ''}>{item.label}</Link>
          ))}
        </nav>
        <a className="button button-small nav-cta" href={whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={17} /> WhatsApp</a>
        <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Auto Som Kaufmann - Desde 1985<br />Tradição, qualidade e confiança<br />há mais de 40 anos.</p>
        </div>
        <div>
          <p className="eyebrow">CONTATO</p>
          <a className="footer-contact" href={phone}><Phone size={14} /> +55 45 3055-2473</a>
          <a className="footer-contact" href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={14} /> @kaufmann.som</a>
          <a className="footer-contact" href={maps} target="_blank" rel="noopener noreferrer"><MapPin size={14} /> <span>Rua Adilson Bier, 66<br />Jardim Porto Alegre - Toledo - PR</span></a>
        </div>
        <div>
          <p className="eyebrow">NAVEGAÇÃO</p>
          <div className="footer-links">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
      </div>
      <div className="container copyright">Desenvolvido com dedicação para nossos clientes.</div>
    </footer>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><FaWhatsapp size={26} /></a>
    </div>
  )
}

export function HomeContent() {
  return (
    <section className="hero">
      <div className="hero-photo" style={{ backgroundImage: 'url(/images/hero-interior.jpg)' }} role="img" aria-label="Interior de veículo com central multimídia instalada" />
      <div className="container hero-content">
        <h1>Tradição, qualidade e<br /> confiança há mais de <em>40 anos</em></h1>
        <p className="hero-subtitle">Som automotivo, acessórios, alarmes e<br className="desktop" /> películas em Toledo e região.</p>
        <div className="hero-actions">
          <a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={19} /> Solicitar orçamento no WhatsApp</a>
          <Link className="button button-outline" href="/servicos">Conhecer serviços <ArrowRight size={17} /></Link>
        </div>
        <div className="proofs">
          <div><CalendarDays size={22} /><span>Desde<br /><b>1985</b></span></div>
          <div><Star size={22} /><span><b>4,9</b><br />no Google</span></div>
          <div><ShieldCheck size={22} /><span>Autorizado<br /><b>3M</b></span></div>
        </div>
      </div>
    </section>
  )
}

export function AboutContent() {
  return (
    <section className="section about page-section">
      <div className="container split">
        <div>
          <p className="eyebrow">SOBRE NÓS</p>
          <h1>Uma história construída<br /> com confiança</h1>
          <p>Fundada em 1985, a Auto Som Kaufmann é referência em som automotivo, acessórios, alarmes e películas em Toledo e região.</p>
          <p>São mais de 40 anos de tradição, família e compromisso em oferecer tecnologia e atendimento de qualidade para oferecer sempre as melhores soluções para seu veículo e seu dia a dia.</p>
        </div>
        <Fachada />
      </div>
    </section>
  )
}

export function ServicesContent() {
  return (
    <section className="section services page-section">
      <div className="container">
        <p className="eyebrow">NOSSOS SERVIÇOS</p>
        <h1 className="section-title">Nossos serviços</h1>
        <div className="service-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <div className="service-bg" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="service-copy"><div className="service-icon"><ServiceIcon size={18} /></div><h2>{service.title}</h2><p>{service.text}</p></div>
              </article>
            )
          })}
        </div>
        <div className="brands">
          <p className="eyebrow">MARCAS COM QUE TRABALHAMOS</p>
          <div className="brand-row">{brands.map((brand) => <BrandLogo key={brand.name} name={brand.name} file={brand.file} />)}</div>
        </div>
      </div>
    </section>
  )
}

export function ProductsContent() {
  return (
    <section className="section products page-section">
      <div className="container">
        <p className="eyebrow">PRODUTOS</p>
        <h1 className="section-title">Produtos e acessórios</h1>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-art" style={{ backgroundImage: `url(${product.image})` }} role="img" aria-label={product.name} />
              <span>{product.name}</span>
            </article>
          ))}
        </div>
        <a className="product-note" href={whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={17} /> Consulte modelos e disponibilidade pelo WhatsApp</a>
      </div>
    </section>
  )
}

export function ReviewsContent() {
  return (
    <section className="section reviews page-section">
      <div className="container reviews-wrap">
        <div className="rating">
          <p className="eyebrow">QUEM CONHECE, RECOMENDA</p>
          <h1>4,9<small>/5</small></h1>
          <div className="stars">★★★★★</div>
          <p><FcGoogle className="google-icon" /> Avaliações no Google</p>
        </div>
        <div className="review-grid">
          {reviews.map(([name, text]) => <article key={name}><div className="stars small">★★★★★</div><p>{text}</p><b>{name}</b></article>)}
        </div>
      </div>
    </section>
  )
}

export function ContactContent() {
  return (
    <>
      <section className="section contact page-section">
        <div className="container">
          <p className="eyebrow">FALE CONOSCO</p>
          <h1 className="section-title">Contato e localização</h1>
          <div className="contact-grid">
            <div><p className="eyebrow">ATENDEMOS TOLEDO E REGIÃO</p><p>Serviços fora de Toledo devem ser consultados previamente.</p></div>
            <div className="address">
              <MapPin size={20} /><p>Rua Adilson Bier, 66<br />Jardim Porto Alegre<br />Toledo - PR</p>
              <a className="button button-small" href={maps} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <ExternalLink size={15} /></a>
            </div>
            <iframe className="map" src="https://www.google.com/maps?q=Rua+Adilson+Bier,+66,+Jardim+Porto+Alegre,+Toledo,+PR&output=embed" title="Localização da Auto Som Kaufmann no Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container cta-inner">
          <h2>PRECISA DE UM ORÇAMENTO?</h2>
          <div className="cta-grid">
            <div className="cta-info">
              <p><FaWhatsapp size={17} /> WhatsApp / Telefone <a href={phone}><strong>+55 45 3055-2473</strong></a></p>
              <p><FaInstagram size={17} /> Instagram <a href={instagram} target="_blank" rel="noopener noreferrer"><strong>@kaufmann.som</strong></a></p>
              <p><CreditCard size={17} /> Formas de pagamento <strong>Pix · Cartão · Dinheiro</strong></p>
            </div>
            <div className="cta-action">
              <a className="button" href={whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={19} /> Falar no WhatsApp</a>
              <p>Olá! Vim pelo site da Auto Som Kaufmann e gostaria de solicitar um orçamento.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
