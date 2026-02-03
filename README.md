# E-Commerce Mini Projeto

E-commerce moderno e completo desenvolvido como desafio técnico para vaga de desenvolvedor frontend júnior.

## 📋 Sobre o Projeto

Aplicação de e-commerce responsiva com carrinho de compras funcional, busca inteligente e assistente virtual. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno, com foco em performance, acessibilidade e experiência do usuário.

**Deploy:** [https://e-commerce-peach-theta-17.vercel.app/](https://e-commerce-peach-theta-17.vercel.app/)

## ✨ Funcionalidades

### Requisitos Principais

- ✅ **Listagem de Produtos** - Grid responsivo com cards animados
- ✅ **Página de Detalhes** - Informações completas do produto com galeria
- ✅ **Carrinho de Compras** - Adicionar, remover, atualizar quantidades
- ✅ **Design Responsivo** - Otimizado para 375px (mobile) até 1440px (desktop)
- ✅ **API Backend** - Rotas Next.js para produtos

### Diferenciais Implementados

- 🔍 **Busca Inteligente** - Autocomplete com debounce de 500ms
- 🤖 **ChatBot Assistente** - Recomendações baseadas em categorias e preços
- ✨ **Animações Fluidas** - Framer Motion para transições suaves
- 🔔 **Notificações Toast** - Feedback visual com Sonner
- 🎯 **Banner Promocional** - Hero section com animações
- 💾 **Persistência de Dados** - Carrinho salvo no localStorage
- ♿ **Acessibilidade** - ARIA labels, semantic HTML, navegação por teclado
- 🎨 **Tema Customizado** - Paleta purple/pink com gradientes

## 🛠️ Tecnologias Utilizadas

| Tecnologia      | Versão | Uso                         |
| --------------- | ------ | --------------------------- |
| Next.js         | 15.1.6 | Framework React com SSR/SSG |
| TypeScript      | 5.7.2  | Tipagem estática            |
| React           | 19.0.0 | Biblioteca UI               |
| Tailwind CSS    | 3.4.1  | Estilização utility-first   |
| shadcn/ui       | -      | Componentes acessíveis      |
| Framer Motion   | -      | Animações                   |
| Zustand         | 5.0.2  | Gerenciamento de estado     |
| Jest            | -      | Testes unitários            |
| Testing Library | -      | Testes de componentes       |

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/alissonsveen/e-commerce.git

# Entre na pasta
cd e-commerce

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
npm test         # Executa testes em modo watch
npm run test:ci  # Executa testes em modo CI
```

## 🧪 Testes

O projeto possui cobertura de testes unitários para garantir a qualidade do código:

```bash
npm test
```

**Cobertura Atual:**

- ✅ 17 testes unitários (100% passing)
- ✅ Testes de utilidades (formatPrice)
- ✅ Testes de store (useCartStore - add, remove, update, clear)
- ✅ Testes de componentes (ProductCard - renderização, badges, estados)

## 📁 Estrutura do Projeto

```
e-commerce/
├── public/
│   ├── images/           # Imagens dos produtos
│   └── woman-promotion.webp
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── products/
│   │   │       ├── route.ts          # GET /api/products
│   │   │       └── [id]/route.ts     # GET /api/products/:id
│   │   ├── products/
│   │   │   └── [id]/page.tsx         # Página de detalhes
│   │   ├── layout.tsx                # Layout raiz com metadata SEO
│   │   ├── page.tsx                  # Home page
│   │   └── globals.css
│   ├── components/
│   │   ├── Cart/
│   │   │   └── Cart.tsx              # Drawer do carrinho
│   │   ├── ChatBot/
│   │   │   └── ChatBot.tsx           # Assistente virtual
│   │   ├── Header/
│   │   │   └── Header.tsx            # Navegação principal
│   │   ├── Footer/
│   │   │   └── Footer.tsx
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx
│   │   │   └── __tests__/
│   │   ├── ProductGrid/
│   │   ├── SearchBar/
│   │   │   └── SearchBar.tsx         # Busca com autocomplete
│   │   ├── PromoBanner/
│   │   │   └── PromoBanner.tsx       # Banner hero
│   │   └── ui/                       # shadcn/ui components
│   ├── lib/
│   │   ├── formatters.ts             # Utilitários (formatPrice)
│   │   └── __tests__/
│   ├── store/
│   │   ├── cartStore.ts              # Zustand store
│   │   └── __tests__/
│   └── types/
│       └── product.ts                # Interfaces TypeScript
├── jest.config.ts
├── jest.setup.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Decisões Técnicas

### Por que Next.js 15?

- **App Router**: Arquitetura moderna com React Server Components
- **API Routes**: Backend integrado para endpoints de produtos
- **Image Optimization**: Otimização automática de imagens com next/image
- **SEO**: Suporte nativo a metadata e SSG para melhor indexação
- **Performance**: Automatic code splitting e lazy loading
- **Deploy**: Integração perfeita com Vercel

### Por que Zustand para gerenciamento de estado?

- **Simplicidade**: API minimalista sem boilerplate
- **Performance**: Re-renders otimizados, sem Context API overhead
- **DevTools**: Integração com Redux DevTools para debug
- **Persist**: Middleware nativo para localStorage
- **TypeScript**: Excelente suporte a tipagem
- **Bundle Size**: ~1KB vs 3KB+ do Redux

### Por que shadcn/ui?

- **Acessibilidade**: Componentes seguem padrões WCAG
- **Customização**: Código fonte no projeto, 100% editável
- **Radix UI**: Primitives testados e acessíveis
- **TypeScript**: Totalmente tipado
- **Sem vendor lock-in**: Você possui o código
- **Tailwind**: Integração nativa com classes utility

### Por que Framer Motion?

- **Declarativo**: Animações fáceis de ler e manter
- **Performance**: Animações via GPU
- **Gestos**: Suporte a drag, hover, tap
- **Layout Animations**: Animações automáticas de layout
- **Variants**: Sistema de variantes para estados
- **Bundle**: Tree-shakable, só importa o que usa

### Por que TypeScript?

- **Type Safety**: Catch errors em tempo de desenvolvimento
- **IntelliSense**: Autocomplete e documentação inline
- **Refactoring**: Mudanças seguras em toda a codebase
- **Manutenibilidade**: Código auto-documentado
- **Produtividade**: Menos bugs em produção

## 🎨 Design System

### Paleta de Cores

- **Primary**: Purple 600 (#9333EA)
- **Secondary**: Pink 600 (#DB2777)
- **Gradientes**: Purple → Pink para CTAs e destaques
- **Neutrals**: Gray scale para textos e backgrounds

### Tipografia

- **Font**: System font stack (sans-serif)
- **Headings**: Font bold, line-height tight
- **Body**: Font normal, line-height relaxed

### Componentes

- **Cards**: Rounded-xl, shadow, hover effects
- **Buttons**: Gradient background, hover scale
- **Badges**: Cores por categoria
- **Inputs**: Border focus ring purple

### Animações

- **Entrada**: Fade in + slide up
- **Hover**: Scale 1.05, shadow elevation
- **Transições**: 300ms ease-out
- **Loading**: Skeleton screens

## ♿ Acessibilidade

Seguindo as diretrizes WCAG 2.1:

- ✅ **Semantic HTML**: nav, header, main, footer, article
- ✅ **ARIA Labels**: Descritivos em todos os elementos interativos
- ✅ **Keyboard Navigation**: Tab order lógico
- ✅ **Focus Visible**: Outline em elementos focados
- ✅ **Alt Text**: Descrições detalhadas em imagens
- ✅ **Color Contrast**: Mínimo 4.5:1 (AA)
- ✅ **Screen Readers**: aria-live, aria-expanded, role

## 🔍 SEO

Otimizações implementadas:

- ✅ **Metadata API**: Title templates e descriptions dinâmicas
- ✅ **OpenGraph**: Cards para redes sociais
- ✅ **Twitter Cards**: Preview otimizado
- ✅ **Structured Data**: Schema.org (futuro)
- ✅ **Sitemap**: Geração automática (futuro)
- ✅ **Robots.txt**: Controle de crawlers
- ✅ **Semantic HTML**: Estrutura clara para bots
- ✅ **Performance**: Core Web Vitals otimizados

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first e testado nas seguintes resoluções:

| Dispositivo | Resolução | Breakpoint |
| ----------- | --------- | ---------- |
| Mobile      | 375px     | Base       |
| Tablet      | 768px     | md:        |
| Desktop     | 1024px    | lg:        |
| Wide        | 1440px    | xl:        |

**Técnicas utilizadas:**

- Grid responsivo (1 col mobile → 4 cols desktop)
- Tipografia fluida (clamp)
- Imagens responsivas (next/image com sizes)
- Menu hamburguer em mobile
- Touch gestures otimizados

## 🚀 Performance

Otimizações implementadas:

- ✅ **Image Optimization**: WebP, lazy loading, responsive images
- ✅ **Code Splitting**: Automatic chunking do Next.js
- ✅ **Lazy Loading**: Componentes e rotas carregados sob demanda
- ✅ **Debounce**: Busca com debounce de 500ms
- ✅ **Memoization**: useMemo e useCallback em componentes críticos
- ✅ **Bundle Analysis**: Análise de tamanho do bundle
- ✅ **Static Generation**: Páginas de produto pré-renderizadas

**Métricas esperadas (Lighthouse):**

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔄 Fluxo de Dados

```
User Action (Click/Type)
    ↓
Component Event Handler
    ↓
Zustand Action (addItem, updateQuantity)
    ↓
Store Update (Immer-style)
    ↓
Persist Middleware (localStorage)
    ↓
Component Re-render (subscribers)
    ↓
UI Update + Toast Notification
```

## 🛡️ Qualidade de Código

- ✅ **TypeScript**: Strict mode ativado
- ✅ **ESLint**: Configuração Next.js + rules customizadas
- ✅ **Prettier**: Formatação automática (futuro)
- ✅ **Husky**: Git hooks para qualidade (futuro)
- ✅ **Jest**: Testes unitários
- ✅ **Testing Library**: Testes de componentes
- ✅ **No console.log**: Produção limpa

## 🎓 Aprendizados e Desafios

### Desafios Superados

1. **Persistência do Carrinho**: Implementado com Zustand persist middleware
2. **Busca Inteligente**: Debounce + múltiplos critérios de busca
3. **Animações Performáticas**: Framer Motion com GPU acceleration
4. **SEO Dinâmico**: Metadata API do Next.js 15
5. **Acessibilidade**: ARIA completo e testes com keyboard

### Próximas Melhorias

- [ ] Testes E2E com Playwright
- [ ] Storybook para documentação de componentes
- [ ] Internacionalização (i18n)
- [ ] Dark mode
- [ ] Filtros avançados (preço, categoria, ordenação)
- [ ] Wishlist
- [ ] Reviews de produtos
- [ ] Integração com pagamento

### Transparência

Para acelerar o desenvolvimento, utilizei IA (GitHub Copilot) como apoio em refatorações, debug e ajustes de UI/UX. Todas as decisões de arquitetura, lógica de negócio e testes foram feitas manualmente e revisadas para garantir consistência.

## 👨‍💻 Autor

**Alisson Sveen**

- GitHub: [@alissonsveen](https://github.com/alissonsveen)

## 📄 Licença

MIT - Projeto desenvolvido para fins educacionais e de avaliação técnica.
