<div align="center">
  <img src="public/images/logo-auto-som-kaufmann.png" alt="Auto Som Kaufmann" width="360">

  <h1>Site institucional — Auto Som Kaufmann</h1>

  <p>
    Som automotivo, acessórios, alarmes e películas em Toledo–PR.
  </p>

  <p>
    <a href="https://autosomkaufmann.com.br/"><strong>Visitar o site</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs" alt="Next.js 16">
    <img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19">
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.7">
    <img src="https://img.shields.io/badge/Layout-responsivo-FFCC00" alt="Layout responsivo">
  </p>
</div>

---

## Sobre o projeto

Site institucional responsivo desenvolvido para apresentar a Auto Som Kaufmann, seus serviços, produtos e marcas parceiras. A página também reúne avaliações de clientes, localização da loja e contato direto pelo WhatsApp.

O projeto utiliza Next.js no desenvolvimento e pode gerar uma versão estática composta por HTML, CSS e JavaScript.

## Funcionalidades

- Apresentação institucional da empresa.
- Catálogo de serviços e produtos.
- Exibição das principais marcas parceiras.
- Avaliações de clientes no Google.
- Localização e acesso ao Google Maps.
- Contato direto pelo WhatsApp.
- Layout adaptado para computadores, tablets e celulares.

## Executar no computador

É necessário ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` no navegador.

## Gerar a versão estática

```bash
npm run build
```

O comando cria automaticamente a pasta `out/` com a versão estática do site. Essa pasta é um resultado temporário da compilação, por isso não fica armazenada no GitHub e pode ser gerada novamente a qualquer momento.

## Estrutura principal

```text
app/
├── globals.css      # Estilos e responsividade
├── layout.tsx       # Metadados e configurações gerais
├── page.tsx         # Página inicial
├── site-components.tsx # Menu, rodapé e conteúdos compartilhados
├── sobre/           # Página Sobre
├── servicos/        # Página Serviços
├── produtos/        # Página Produtos
├── avaliacoes/      # Página Avaliações
└── contato/         # Página Contato

public/images/       # Fotografias, logotipos e imagens do site
```

## Empresa

**Auto Som Kaufmann**  
Rua Adilson Bier, 66 — Jardim Porto Alegre  
Toledo — Paraná
