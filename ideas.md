# Brainstorm de Design — WallTech Tecnologia

## Contexto
Site institucional para empresa de tecnologia (manutenção, suporte, locação, venda de equipamentos). Público-alvo: pessoas físicas e pequenas empresas em São Paulo. Objetivo principal: conversão via WhatsApp. O site precisa transmitir confiança, profissionalismo e proximidade.

---

## Abordagens de Design

### 1. Tech Minimalista
**Nome:** Clean Circuit
**Intro:** Design escuro com acentos de ciano elétrico e branco, inspirado em interfaces de hardware moderno. Transmite precisão técnica e sofisticação.
**Probabilidade:** 0.04

### 2. Corporativo Acessível
**Nome:** Trust Blue
**Intro:** Paleta azul corporativa sobre fundo claro, com tipografia robusta e espaçamento generoso. Transmite confiança, estabilidade e profissionalismo sem frieza.
**Probabilidade:** 0.73

### 3. Industrial Tech
**Nome:** Dark Forge
**Intro:** Fundo escuro com elementos de gradientes sutis e tons de grafite/azul-petróleo. Visual que remete a engenharia e tecnologia de ponta.
**Probabilidade:** 0.08

---

## Abordagem Escolhida: Trust Blue

### Design Movement
Corporate Modernism com influências de Swiss Design — grid preciso, hierarquia tipográfica clara, funcionalidade acima de ornamentação.

### Core Principles
1. **Clareza absoluta** — cada elemento tem propósito, sem ruído visual
2. **Confiança visual** — cores e formas que comunicam estabilidade e profissionalismo
3. **Hierarquia escaneável** — o usuário encontra o que precisa em segundos
4. **Acessibilidade first** — contraste alto, textos legíveis, navegação intuitiva

### Color Philosophy
- **Primária:** Azul profundo (#1B4F8A) — cor da confiança, tecnologia e profissionalismo
- **Acento:** Ciano vibrante (#00A3E0) — energia, inovação e chamada para ação
- **Fundo:** Branco puro com seções em cinza-azulado muito claro (#F8FAFC)
- **Texto:** Cinza escuro (#1A1A2E) para corpo, azul escuro para títulos
- **WhatsApp:** Verde oficial (#25D366) para botões de conversão
- **Emotional intent:** O azul transmite segurança e expertise; o ciano adiciona modernidade e dinamismo; o branco garante respiração e clareza.

### Layout Paradigm
Layout vertical com seções full-width alternando entre fundo branco e cinza-azulado claro. Grid de 12 colunas no desktop, cards em grid responsivo. Header fixo com transição de transparência ao rolar. Seções com bastante respiro vertical (py-24 em desktop).

### Signature Elements
1. **Linhas geométricas sutis** — divisores com linhas finas e bordas left/accent que organizam conteúdo
2. **Cards com hover elevation** — elevação suave ao passar o mouse, sombra azulada sutil
3. **Ícones lineares em ciano** — iconografia consistente e moderna em todos os serviços

### Interaction Philosophy
Interações discretas e funcionais. Hover com elevação e mudança de cor no acento. Scroll suave entre seções. Botões com feedback tátil (scale on press). Animações de entrada sutis com fade+translate nos cards ao entrar no viewport.

### Animation
- Entrada de seções: fade-in + translate-y de 24px, duração 500ms, ease-out
- Stagger entre cards: 60ms de delay sequencial
- Header: transição de background em 300ms ao rolar
- Botões: scale(0.97) on active, 160ms ease-out
- WhatsApp float: pulse sutil a cada 3s para chamar atenção
- Respeitar prefers-reduced-motion

### Typography System
- **Display/Headings:** Space Grotesk (Google Fonts) — geométrica, moderna, técnica
- **Body:** Inter (Google Fonts) — legível, neutra, profissional
- **Hierarchy:** H1: 3.5rem/700, H2: 2.25rem/600, H3: 1.5rem/600, Body: 1rem/400, Small: 0.875rem/400
- **Peso:** Bold para títulos, Regular para corpo, Medium para labels

### Brand Essence
**Posicionamento:** Tecnologia acessível para quem precisa que as coisas funcionem — para residências e empresas que valorizam transparência e competência técnica.
**Personalidade:** Confiável · Profissional · Próximo

### Brand Voice
- Headlines: diretas, orientadas a resultado, sem jargão técnico excessivo
- CTAs: claras e orientadas à ação, sempre com benefício implícito
- Microcopy: acolhedora mas profissional
- **Exemplo headline:** "Tecnologia que funciona para você."
- **Exemplo CTA:** "Solicitar orçamento pelo WhatsApp"

### Wordmark & Logo
Logotipo geométrico: um "W" estilizado formado por linhas conectadas que remetem a circuitos/conexões, em azul profundo com acento ciano. Versão compacta para favicon.

### Signature Brand Color
**#1B4F8A** — Azul WallTech. Profundo, institucional, inconfundível.
