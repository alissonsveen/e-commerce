# E-Commerce Mini Projeto

E-commerce moderno desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

Desafio técnico para vaga de desenvolvedor frontend júnior.

## Sobre

E-commerce completo com carrinho de compras, busca inteligente e assistente virtual. Design moderno com tema purple/pink e animações profissionais.

## Funcionalidades

**Requisitos:**

- Listagem de Produtos
- Página de Detalhes
- Carrinho de Compras
- Design Responsivo (375px e 1440px)
- API Backend

**Diferenciais:**

- Busca Inteligente com debounce
- ChatBot Assistente
- Animações com Framer Motion
- Toast notifications
- Banner promocional
- Persistência localStorage

## Tecnologias

- Next.js 15.1.6
- TypeScript 5.7.2
- React 19.0.0
- Tailwind CSS 3.4.1
- shadcn/ui
- Framer Motion
- Zustand
- Sonner

## Instalação

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Estrutura

```
src/
├── app/
│   ├── api/products/
│   ├── products/[id]/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Cart/
│   ├── ChatBot/
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   ├── SearchBar/
│   └── ui/
├── store/
│   └── cartStore.ts
└── types/
    └── product.ts
```

## Decisões Técnicas

**Next.js:** App Router, API Routes, Server Components, deploy otimizado

**Zustand:** Simplicidade, performance, persist middleware

**shadcn/ui:** Acessibilidade, customização, código no projeto

**Framer Motion:** Animações declarativas, performance GPU

## Tema

- Cores: Purple 600 e Pink 600
- Gradientes purple/pink
- Animações suaves
- Skeleton loaders

## Diferenciais

- ChatBot com recomendações inteligentes
- Busca avançada com múltiplos critérios
- Animações profissionais

## Licença

MIT - Projeto de estudo
