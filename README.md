# Cartão Interativo Premium — Jhonatan Tiburcio

Mini-site **cinemático**, **mobile-first** e com estética **luxury tech** para posicionamento profissional de alto valor.

Este projeto foi pensado para ir além de uma página de links tradicional, entregando uma experiência visual e interativa inspirada em:

- narrativa de produto estilo Apple;
- refinamento visual Linear;
- motion elegante estilo Stripe;
- estética dark premium próxima de Vercel;
- composição editorial contemporânea.

---

## ✨ Objetivo do Projeto

Comunicar autoridade técnica e execução premium para serviços digitais, com foco em conversão por WhatsApp e apresentação de portfólio/serviços em formato de cartão interativo.

A página foi estruturada para transmitir:

- confiança;
- modernidade;
- sofisticação visual;
- clareza de proposta de valor;
- experiência de produto, não apenas um perfil.

---

## 🧱 Stack Tecnológica

- **Next.js 14+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Lucide React**

---

## 📁 Estrutura de Pastas

```bash
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    cinematic-background.tsx
    premium-particles.tsx
    hero-identity.tsx
    magnetic-action-buttons.tsx
    tech-signature.tsx
    premium-footer.tsx
  data/
    profile.ts
  lib/
    utils.ts
    whatsapp.ts
  types/
    profile.ts
```

### Organização

- `app/`: estrutura base e composição da página.
- `components/`: blocos visuais reutilizáveis e orientados à experiência.
- `data/`: conteúdo centralizado (perfil, serviços, stack).
- `lib/`: helpers utilitários (classes, geração de link WhatsApp).
- `types/`: contratos tipados para segurança e manutenção.

---

## 🎨 Direção Visual

### Paleta principal

- `#040612` — fundo profundo (bg deep)
- `#0A1022` — camada de fundo (bg layer)
- `rgba(15, 23, 42, 0.42)` — superfície glass
- `#111827` — superfície sólida
- `#F3F7FF` — texto forte
- `#B8C2E0` — texto secundário
- `#67E8F9` — accent cyan
- `#38BDF8` — accent blue
- `#8B5CF6` — accent violet
- `#A78BFA` — accent purple

### Gradientes cinematográficos

- `#8B5CF6 → #38BDF8`
- `#0EA5E9 → #A855F7`
- `#67E8F9 → #8B5CF6`

### Princípios de UI

- glassmorphism refinado (blur + borda sutil + brilho controlado);
- contraste premium e tipografia respirada;
- animações suaves e lentas;
- profundidade por camadas, sem poluição visual.

---

## 🧩 Componentes Principais

### `CinematicBackground`
Responsável pelo ambiente visual global:

- gradientes radiais em camadas;
- “aurora lights” animadas;
- profundidade com blur e sobreposição escura;
- textura suave para sensação orgânica.

### `PremiumParticles`
Partículas discretas e de baixa opacidade para dar sensação de interface viva sem estética gamer/cyberpunk.

### `HeroIdentity`
Bloco principal de identidade:

- monograma circular com halo;
- nome e headline com hierarquia forte;
- descrição de posicionamento;
- chips de credibilidade;
- CTA primária para WhatsApp.

### `MagneticActionButtons`
Área de ações comerciais com microinterações:

- hover lift;
- shine sweep;
- glow sutil;
- ícones com movimento;
- feedback tátil no tap/click.

### `TechSignature`
Assinatura tecnológica com pills elegantes destacando stack e capacidade técnica.

### `PremiumFooter`
Rodapé minimalista com localização, e-mail e nota premium discreta.

---

## 🧠 Conteúdo e Dados

O conteúdo principal está em `src/data/profile.ts`, incluindo:

- dados do profissional;
- headline e descrição;
- serviços e mensagens pré-prontas;
- stack de tecnologia exibida no bloco de assinatura.

Esse formato facilita customização sem alterar componentes visuais.

---

## 🔗 Integrações e Utilitários

### WhatsApp (`src/lib/whatsapp.ts`)
Gera links no formato `wa.me` com mensagem codificada automaticamente.

Exemplo de uso:

```ts
buildWhatsAppLink('+55 14 99124-2019', 'Olá, quero falar sobre um projeto.')
```

### Utilitário de classes (`src/lib/utils.ts`)
Combina `clsx` + `tailwind-merge` para composição segura de classes Tailwind.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## ⚙️ Personalização Rápida

### 1) Alterar dados de perfil
Edite `src/data/profile.ts`:

- `name`
- `headline`
- `description`
- `location`
- `whatsapp`
- `email`
- `services`
- `stack`

### 2) Ajustar cores e tokens
Edite `tailwind.config.ts` para:

- paleta;
- sombras premium;
- texturas de background.

### 3) Ajustar motion
Edite transições/variants em:

- `src/components/cinematic-background.tsx`
- `src/components/premium-particles.tsx`
- `src/components/hero-identity.tsx`
- `src/components/magnetic-action-buttons.tsx`
- `src/components/tech-signature.tsx`

---

## 🌍 Deploy

Recomendado em **Vercel** para melhor experiência com Next.js App Router.

Passos sugeridos:

1. conectar repositório no Vercel;
2. framework detectado automaticamente como Next.js;
3. deploy contínuo por branch.

---

## ✅ Qualidade e Boas Práticas Aplicadas

- estrutura componentizada e escalável;
- tipagem forte com TypeScript;
- separação clara entre conteúdo, UI e utilitários;
- design mobile-first;
- foco em performance visual sem excesso de efeitos;
- CTA orientada à conversão.

---

## 📌 Serviços Posicionados

- Automações
- Sistemas Web
- Landing Pages
- Cartões Interativos
- Dashboards em Python
- Soluções com Excel
- IA aplicada a negócios

---

## 👤 Contato

**Jhonatan Tiburcio**  
Bauru/SP, Brasil  
📱 WhatsApp: +55 14 99124-2019  
✉️ E-mail: lisboatiburcio@gmail.com

---

Se quiser, este projeto pode evoluir para uma versão com:

- CMS para gestão de conteúdo;
- analytics de cliques por CTA;
- múltiplos temas premium;
- modo multilíngue;
- experimentos de conversão (A/B).
