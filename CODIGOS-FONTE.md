# WallTech Tecnologia — Códigos-Fonte

## Linguagens utilizadas

| Linguagem | Extensão | Uso no projeto |
|-----------|----------|----------------|
| **HTML** | `.html` | Estrutura da página (`client/index.html`) |
| **CSS** | `.css` | Estilos globais, cores da marca, tipografia (`client/src/index.css`) |
| **TypeScript/TSX** | `.ts` / `.tsx` | Lógica da aplicação, componentes React, utilitários |

O projeto usa **React 19** com **TypeScript**, estilizado com **Tailwind CSS 4** e componentes **shadcn/ui**.

---

## 1. HTML — `client/index.html`

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1"
    />
    <title>WallTech Tecnologia | Manutenção, Suporte e Locação de Equipamentos</title>
    <meta name="description" content="WallTech Tecnologia — Venda, manutenção, suporte e locação de equipamentos para residências e empresas. Serviços técnicos com atendimento transparente." />
    <meta name="keywords" content="manutenção de computadores, suporte técnico, locação de equipamentos, upgrade SSD, formatação, redes, WallTech, São Paulo" />
    <meta name="author" content="WallTech Tecnologia" />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="WallTech Tecnologia | Manutenção, Suporte e Locação" />
    <meta property="og:description" content="Venda, manutenção, suporte e locação de equipamentos para residências e empresas." />
    <meta property="og:image" content="/manus-storage/hero-bg_3880ab71.png" />
    <meta property="og:url" content="https://walltechoficial.com.br" />
    <meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="WallTech Tecnologia | Manutenção, Suporte e Locação de Equipamentos" />
    <meta name="twitter:description" content="Manutenção de computadores e notebooks, upgrades, limpeza, suporte técnico, configuração de redes, venda e locação de equipamentos para residências e empresas." />
    <link rel="canonical" href="https://walltechoficial.com.br" />
    <link rel="icon" type="image/png" href="/manus-storage/logo-walltech-official_f4b875cb.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      defer
      src="%VITE_ANALYTICS_ENDPOINT%/umami"
      data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"
    ></script>
  </body>
</html>
```

---

## 2. CSS — `client/src/index.css`

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-display: "Space Grotesk", system-ui, sans-serif;
}

:root {
  --primary: oklch(0.62 0.18 245);
  --primary-foreground: oklch(0.98 0.005 250);
  --sidebar-primary: oklch(0.58 0.2 245);
  --sidebar-primary-foreground: oklch(0.98 0.005 250);
  --chart-1: oklch(0.72 0.16 245);
  --chart-2: oklch(0.62 0.18 245);
  --chart-3: oklch(0.52 0.18 245);
  --chart-4: oklch(0.42 0.15 245);
  --chart-5: oklch(0.32 0.12 245);
  --radius: 0.65rem;
  --background: oklch(0.98 0.003 250);
  --foreground: oklch(0.12 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.12 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.12 0 0);
  --secondary: oklch(0.96 0.004 250);
  --secondary-foreground: oklch(0.35 0.01 250);
  --muted: oklch(0.94 0.005 250);
  --muted-foreground: oklch(0.45 0.02 250);
  --accent: oklch(0.96 0.005 250);
  --accent-foreground: oklch(0.12 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.85 0.015 250);
  --input: oklch(0.85 0.015 250);
  --ring: oklch(0.62 0.18 245);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.12 0 0);
  --sidebar-accent: oklch(0.96 0.005 250);
  --sidebar-accent-foreground: oklch(0.12 0 0);
  --sidebar-border: oklch(0.85 0.015 250);
  --sidebar-ring: oklch(0.62 0.18 245);
}

.dark {
  --primary: oklch(0.62 0.18 245);
  --primary-foreground: oklch(0.98 0.005 250);
  --sidebar-primary: oklch(0.58 0.2 245);
  --sidebar-primary-foreground: oklch(0.98 0.005 250);
  --background: oklch(0.12 0 0);
  --foreground: oklch(0.85 0.005 250);
  --card: oklch(0.18 0.005 250);
  --card-foreground: oklch(0.85 0.005 250);
  --popover: oklch(0.18 0.005 250);
  --popover-foreground: oklch(0.85 0.005 250);
  --secondary: oklch(0.22 0.005 250);
  --secondary-foreground: oklch(0.7 0.005 250);
  --muted: oklch(0.26 0.005 250);
  --muted-foreground: oklch(0.65 0.01 250);
  --accent: oklch(0.26 0.005 250);
  --accent-foreground: oklch(0.92 0.005 250);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.62 0.18 245);
  --chart-1: oklch(0.72 0.16 245);
  --chart-2: oklch(0.62 0.18 245);
  --chart-3: oklch(0.52 0.18 245);
  --chart-4: oklch(0.42 0.15 245);
  --chart-5: oklch(0.32 0.12 245);
  --sidebar: oklch(0.18 0.005 250);
  --sidebar-foreground: oklch(0.85 0.005 250);
  --sidebar-accent: oklch(0.26 0.005 250);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.62 0.18 245);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: "Inter", system-ui, -apple-system, sans-serif;
  }
  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-height: 0;
    min-width: 0;
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1280px;
    }
  }
}
```

---

## 3. TypeScript — Utilitários

### `client/src/lib/whatsapp.ts`

```typescript
// WhatsApp utility functions for WallTech
export const WHATSAPP_NUMBER = "5511961359962";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return `${base}?text=${encodeURIComponent("Olá! Encontrei a WallTech pelo site e gostaria de solicitar um orçamento.")}`;
}

export function generateBudgetMessage(data: {
  nome: string;
  telefone: string;
  email: string;
  pessoaOuEmpresa: string;
  tipoServico: string;
  equipamento: string;
  marcaModelo: string;
  problema: string;
  regiao: string;
  preferencia: string;
}): string {
  return `Olá! Vim pelo site da WallTech.

Nome: ${data.nome}
Telefone: ${data.telefone}
E-mail: ${data.email}
Tipo: ${data.pessoaOuEmpresa}
Tipo de atendimento: ${data.tipoServico}
Equipamento: ${data.equipamento}
Marca e modelo: ${data.marcaModelo}
Problema relatado: ${data.problema}
Região: ${data.regiao}
Preferência de atendimento: ${data.preferencia}`;
}
```

### `client/src/hooks/useScrollAnimation.ts`

```typescript
import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
```

---

## 4. TypeScript/TSX — Componentes do Site

### `client/src/components/Header.tsx`

```tsx
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Locação", href: "#locacao" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Perguntas frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/90 backdrop-blur-xl shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src="/manus-storage/logo-walltech-official_f4b875cb.png"
            alt="WallTech"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="font-display font-bold text-xl tracking-tight text-white">
            WALL<span className="text-[#1686FF]">TECH</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-3 py-2 text-sm text-[#F5F7FA]/80 hover:text-white font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F5F7FA]/80 hover:text-white text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-sm rounded-lg transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#1686FF]/30"
          >
            Solicitar orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#000000]/95 backdrop-blur-xl border-t border-white/10 shadow-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="px-4 py-3 text-left text-[#F5F7FA]/80 hover:text-white hover:bg-white/5 font-medium transition-colors rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-sm rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
```

### `client/src/components/HeroSection.tsx`

```tsx
import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToServices = () => {
    const el = document.getElementById("servicos");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_3880ab71.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/78 to-[#000000]/50" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#1686FF]/25 to-transparent" />
        <div className="absolute top-[60%] right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#3AB5FF]/15 to-transparent" />
        <div className="absolute top-16 right-16 w-64 h-64 border border-[#1686FF]/10 rounded-full" />
        <div className="absolute bottom-24 left-12 w-40 h-40 border border-[#3AB5FF]/10 rounded-full" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF]/70 via-[#1686FF]/40 to-transparent" />

      <div className="relative z-10 container pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/8 backdrop-blur-sm border border-[#1686FF]/25 rounded-full text-[#3AB5FF] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#1686FF] rounded-full animate-pulse" />
              Atendimento transparente e profissional
            </span>
          </div>

          <h1 className={`font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-white leading-[1.08] mb-6 tracking-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Tecnologia que <span className="text-[#1686FF]">funciona</span><br />para você.
          </h1>

          <p className={`text-lg sm:text-xl text-[#F5F7FA]/85 leading-relaxed mb-4 max-w-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Venda, manutenção, suporte e locação de equipamentos para residências e empresas.
          </p>

          <p className={`text-[15px] text-[#C8CDD4]/80 leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            A WallTech oferece soluções completas para computadores, notebooks, redes e equipamentos, com atendimento transparente, diagnóstico profissional e suporte especializado.
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-base rounded-xl transition-all duration-200 active:scale-[0.97] shadow-xl shadow-[#1686FF]/30">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento pelo WhatsApp
            </a>
            <button onClick={scrollToServices} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 hover:bg-white/15 backdrop-blur-sm text-white font-medium text-base rounded-xl border border-white/15 transition-all duration-200 active:scale-[0.97]">
              Conhecer nossos serviços
            </button>
          </div>
        </div>
      </div>

      <button onClick={scrollToServices} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-300" aria-label="Rolar para baixo">
        <span className="text-[11px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
```

### `client/src/components/ServicesSection.tsx`

```tsx
import { Monitor, HardDrive, Network, Shield, Cpu, Zap, Laptop, Wifi, Settings, Server, Battery, Headphones, MonitorSmartphone, Printer, Camera, Cable, Code, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Service = { title: string; desc: string; icon: React.ReactNode };

const services: Service[] = [
  { title: "Formatação", desc: "Formatação de computadores e notebooks com backup e instalação de sistemas.", icon: <Monitor className="w-6 h-6" /> },
  { title: "Manutenção", desc: "Diagnóstico e reparo de computadores e notebooks com transparência.", icon: <HardDrive className="w-6 h-6" /> },
  { title: "Upgrade SSD e RAM", desc: "Troca e upgrade de componentes para melhor desempenho.", icon: <Cpu className="w-6 h-6" /> },
  { title: "Limpeza interna", desc: "Limpeza completa para prevenir superaquecimento e falhas.", icon: <Zap className="w-6 h-6" /> },
  { title: "Configuração de redes", desc: "Instalação e configuração de redes residenciais e empresariais.", icon: <Network className="w-6 h-6" /> },
  { title: "Suporte remoto", desc: "Atendimento técnico à distância para solução rápida.", icon: <Shield className="w-6 h-6" /> },
  { title: "Recuperação de dados", desc: "Recuperação de arquivos e dados de armazenamento.", icon: <Laptop className="w-6 h-6" /> },
  { title: "Configuração de Wi-Fi", desc: "Otimização e instalação de redes sem fio.", icon: <Wifi className="w-6 h-6" /> },
  { title: "Instalação de programas", desc: "Instalação de softwares com licenças válidas fornecidas pelo cliente.", icon: <Settings className="w-6 h-6" /> },
  { title: "Configuração de servidores", desc: "Montagem e configuração de servidores e NAS.", icon: <Server className="w-6 h-6" /> },
  { title: "Manutenção preventiva", desc: "Inspeção periódica para evitar falhas e garantir desempenho.", icon: <Battery className="w-6 h-6" /> },
  { title: "Atendimento domiciliar", desc: "Serviço técnico realizado no local do cliente.", icon: <Headphones className="w-6 h-6" /> },
  { title: "Manutenção de celulares", desc: "Reparo de dispositivos móveis com peças originais.", icon: <MonitorSmartphone className="w-6 h-6" /> },
  { title: "Configuração de impressoras", desc: "Instalação e configuração de impressoras e scanners.", icon: <Printer className="w-6 h-6" /> },
  { title: "Instalação de câmeras", desc: "Instalação e configuração de câmeras de segurança.", icon: <Camera className="w-6 h-6" /> },
  { title: "Passagem de cabeamento", desc: "Instalação de cabeamento estruturado.", icon: <Cable className="w-6 h-6" /> },
  { title: "Desenvolvimento web", desc: "Criação de sites e sistemas sob demanda.", icon: <Code className="w-6 h-6" /> },
  { title: "Assistência técnica geral", desc: "Suporte para problemas variados em equipamentos.", icon: <Wrench className="w-6 h-6" /> },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-white relative">
      <div className="container">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Nossos serviços</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Soluções completas em tecnologia
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed max-w-2xl">
              Da manutenção ao suporte, oferecemos tudo que você precisa para seus equipamentos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-[#F5F7FA] rounded-xl p-5 border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 hover:shadow-lg hover:shadow-[#1686FF]/5 transition-all duration-300 active:scale-[0.98] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 40}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-[#1686FF]/15 flex items-center justify-center text-[#1686FF] group-hover:bg-[#1686FF] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[#000000] text-[15px] mb-1.5">{service.title}</h3>
                  <p className="text-[#8B939E] text-[13px] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre os serviços da WallTech.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#1686FF]/25">
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/ProductsSection.tsx`

```tsx
import { Smartphone, Earphones, Watch, Cable, Shield, Plug } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Product = { name: string; desc: string; icon: React.ReactNode };

const products: Product[] = [
  { name: "Celulares e Smartphones", desc: "Dispositivos com garantia e suporte.", icon: <Smartphone className="w-7 h-7" /> },
  { name: "Capas e películas", desc: "Proteção e personalização.", icon: <Shield className="w-7 h-7" /> },
  { name: "Fones de ouvido", desc: "Fones com qualidade de áudio.", icon: <Earphones className="w-7 h-7" /> },
  { name: "Smartwatches", desc: "Relógios inteligentes.", icon: <Watch className="w-7 h-7" /> },
  { name: "Cabos e carregadores", desc: "Cabos USB, HDMI e carregadores.", icon: <Cable className="w-7 h-7" /> },
  { name: "Adaptadores e hubs", desc: "Conectividade para todos os dispositivos.", icon: <Plug className="w-7 h-7" /> },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="produtos" className="py-24 lg:py-32 bg-[#F5F7FA] relative">
      <div className="container">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Produtos</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Acessórios e equipamentos
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed max-w-2xl">
              Produtos selecionados para complementar sua experiência tecnológica.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-6 border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 hover:shadow-lg hover:shadow-[#1686FF]/5 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 60}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1686FF]/10 to-[#3AB5FF]/5 flex items-center justify-center text-[#1686FF] mb-4 group-hover:from-[#1686FF]/15 group-hover:to-[#3AB5FF]/10 transition-all duration-300">
                {product.icon}
              </div>
              <h3 className="font-display font-semibold text-[#000000] text-lg mb-2">{product.name}</h3>
              <p className="text-[#8B939E] text-sm leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href={getWhatsAppUrl("Olá! Gostaria de saber sobre os produtos disponíveis.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#1686FF]/25">
            Consultar produtos
          </a>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/RentalSection.tsx`

```tsx
import { Laptop, Monitor, Printer, Server } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Equipment = { name: string; desc: string; icon: React.ReactNode };

const equipment: Equipment[] = [
  { name: "Notebooks", desc: "Equipamentos prontos para trabalho e estudo.", icon: <Laptop className="w-7 h-7" /> },
  { name: "Computadores", desc: "Desktops configurados conforme a necessidade.", icon: <Monitor className="w-7 h-7" /> },
  { name: "Impressoras", desc: "Equipamentos para impressão e digitalização.", icon: <Printer className="w-7 h-7" /> },
  { name: "Servidores e NAS", desc: "Soluções para armazenamento e infraestrutura.", icon: <Server className="w-7 h-7" /> },
];

export default function RentalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="locacao" className="py-24 lg:py-32 bg-white relative">
      <div className="container">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Locação</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Locação de equipamentos
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed max-w-2xl">
              Alugue equipamentos para uso temporário, eventos ou testes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          {equipment.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 bg-[#F5F7FA] rounded-xl p-5 border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-[#1686FF]/15 flex items-center justify-center text-[#1686FF]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-[#000000] text-base mb-1">{item.name}</h3>
                <p className="text-[#8B939E] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="bg-[#F5F7FA] rounded-xl p-6 border border-[#C8CDD4]/30 max-w-3xl">
            <p className="text-[#8B939E] text-sm leading-relaxed">
              A locação está sujeita à disponibilidade, análise, prazo e condições do contrato. Entre em contato para verificar disponibilidade e condições.
            </p>
          </div>
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href={getWhatsAppUrl("Olá! Gostaria de saber sobre a locação de equipamentos.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#1686FF]/25">
            Consultar locação
          </a>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/EnterpriseSection.tsx`

```tsx
import { Building2, Network, Shield, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Benefit = { title: string; desc: string; icon: React.ReactNode };

const benefits: Benefit[] = [
  { title: "Suporte técnico empresarial", desc: "Atendimento dedicado para empresas.", icon: <Headphones className="w-6 h-6" /> },
  { title: "Manutenção preventiva", desc: "Inspeção periódica dos equipamentos.", icon: <Shield className="w-6 h-6" /> },
  { title: "Configuração de redes", desc: "Redes estruturadas e seguras.", icon: <Network className="w-6 h-6" /> },
  { title: "Planos personalizados", desc: "Soluções sob medida para sua empresa.", icon: <Building2 className="w-6 h-6" /> },
];

export default function EnterpriseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="empresas" className="py-24 lg:py-32 bg-[#0B56D8] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#3AB5FF]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#1686FF]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-white/40 rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#3AB5FF] font-semibold text-sm tracking-wider uppercase mb-3">Empresas</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight">
              Soluções para empresas
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Suporte técnico, manutenção e infraestrutura para manter sua empresa funcionando.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 bg-white/8 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#3AB5FF]/40 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#1686FF]/20 flex items-center justify-center text-[#3AB5FF]">
                {b.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href={getWhatsAppUrl("Olá! Gostaria de saber sobre os serviços para empresas.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#F5F7FA] text-[#0B56D8] font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg">
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/DifferentialsSection.tsx`

```tsx
import { ShieldCheck, Eye, UserCheck, Clock, BadgeCheck, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Differential = { title: string; desc: string; icon: React.ReactNode };

const differentials: Differential[] = [
  { title: "Atendimento transparente", desc: "Orçamentos claros, sem custos surpresa.", icon: <Eye className="w-6 h-6" /> },
  { title: "Diagnóstico profissional", desc: "Análise detalhada antes do serviço.", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Profissionais qualificados", desc: "Equipe treinada e experiente.", icon: <UserCheck className="w-6 h-6" /> },
  { title: "Atendimento rápido", desc: "Resposta ágil para suas necessidades.", icon: <Clock className="w-6 h-6" /> },
  { title: "Soluções sob medida", desc: "Cada caso recebe atenção individual.", icon: <BadgeCheck className="w-6 h-6" /> },
  { title: "Suporte pós-serviço", desc: "Acompanhamento após a conclusão.", icon: <Headphones className="w-6 h-6" /> },
];

export default function DifferentialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-[#F5F7FA] relative">
      <div className="container">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Diferenciais</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Por que escolher a WallTech
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed max-w-2xl">
              Nossos compromissos que fazem a diferença no atendimento.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((d, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-6 border border-[#C8CDD4]/30 hover:border-[#1686FF]/40 hover:shadow-lg hover:shadow-[#1686FF]/5 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1686FF]/10 to-[#3AB5FF]/5 flex items-center justify-center text-[#1686FF] mb-4 group-hover:from-[#1686FF] group-hover:to-[#3AB5FF] group-hover:text-white transition-all duration-300">
                {d.icon}
              </div>
              <h3 className="font-display font-semibold text-[#000000] text-base mb-2">{d.title}</h3>
              <p className="text-[#8B939E] text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/HowItWorksSection.tsx`

```tsx
import { MessageCircle, ClipboardList, Wrench, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Contato", desc: "Entre em contato pelo WhatsApp ou formulário do site.", icon: <MessageCircle className="w-6 h-6" /> },
  { num: "02", title: "Diagnóstico", desc: "Analisamos o problema e apresentamos as opções.", icon: <ClipboardList className="w-6 h-6" /> },
  { num: "03", title: "Execução", desc: "Realizamos o serviço com transparência e qualidade.", icon: <Wrench className="w-6 h-6" /> },
  { num: "04", title: "Entrega", desc: "Entregamos o equipamento funcionando e testado.", icon: <CheckCircle className="w-6 h-6" /> },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="container">
        <div ref={ref} className="relative mb-14">
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
          <div className="pl-5">
            <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Como funciona</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">
              Do contato à entrega
            </h2>
            <p className="text-lg text-[#8B939E] leading-relaxed max-w-2xl">
              Processo simples e transparente para resolver seu problema.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-[#C8CDD4]/30 h-full hover:border-[#1686FF]/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-display font-bold text-[#1686FF]/20">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-[#1686FF] flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-[#000000] text-lg mb-2">{step.title}</h3>
                <p className="text-[#8B939E] text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#C8CDD4]/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/AboutSection.tsx`

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = ["Honestidade", "Transparência", "Respeito", "Ética", "Profissionalismo", "Organização", "Pontualidade", "Qualidade"];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/manus-storage/about-team_12160dad.png" alt="Ambiente profissional da WallTech Tecnologia" className="w-full h-80 lg:h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B56D8]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B56D8] to-[#1686FF]" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#1686FF]/60 rounded-tl-lg" />
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative">
              <div className={`absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "300ms" }} />
              <div className="pl-5">
                <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Sobre a WallTech</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#000000] mb-6 leading-tight tracking-tight">
                  Tecnologia com atendimento <span className="text-[#0B56D8]">próximo e confiável.</span>
                </h2>
              </div>
            </div>

            <div className="space-y-4 mb-8 ml-1">
              <p className="text-[#8B939E] leading-relaxed">A WallTech nasceu com o objetivo de facilitar o acesso a serviços e produtos de tecnologia. A empresa reúne venda de acessórios, manutenção de computadores e notebooks, suporte técnico, configuração de redes e locação de equipamentos.</p>
              <p className="text-[#8B939E] leading-relaxed">Nosso compromisso é entender a necessidade de cada cliente, apresentar soluções adequadas e realizar os serviços com organização, transparência e responsabilidade.</p>
            </div>

            <div className="ml-1">
              <h3 className="font-display font-semibold text-[#000000] text-sm mb-3">Nossos valores:</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span key={value} className="px-3 py-1.5 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm font-medium text-[#000000] hover:border-[#1686FF]/50 hover:bg-[#1686FF]/5 transition-colors duration-200">{value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/ReviewsSection.tsx`

```tsx
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Avaliações</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-[#8B939E] leading-relaxed">As avaliações reais de nossos clientes serão publicadas nesta seção em breve.</p>
          <div className={`flex justify-center mt-8 gap-1 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-[#C8CDD4]" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/FAQSection.tsx`

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { question: "Vocês atendem computadores e notebooks?", answer: "Sim. A WallTech realiza diagnóstico, manutenção, limpeza, formatação, upgrades e outros serviços para computadores e notebooks." },
  { question: "É possível solicitar orçamento pelo WhatsApp?", answer: "Sim. Envie uma descrição do problema, marca e modelo do equipamento para iniciarmos o atendimento." },
  { question: "Vocês realizam retirada e entrega?", answer: "O serviço poderá ser disponibilizado conforme a região, agenda e condições apresentadas no orçamento." },
  { question: "Vocês atendem empresas?", answer: "Sim. A WallTech oferece suporte, manutenção, configuração de equipamentos, redes e planos personalizados para pequenas empresas." },
  { question: "Vocês alugam equipamentos?", answer: "Sim. A locação está sujeita à disponibilidade, análise, prazo e condições do contrato." },
  { question: "O orçamento é feito antes do serviço?", answer: "Sim. Os procedimentos e valores são apresentados ao cliente antes da execução, salvo testes previamente autorizados." },
  { question: "Meus arquivos estarão protegidos?", answer: "A WallTech adota cuidados para preservar a privacidade do cliente. A necessidade de acesso, backup ou formatação será informada e autorizada previamente." },
  { question: "A WallTech fornece programas e licenças?", answer: "A instalação de programas dependerá da disponibilidade de licenças válidas fornecidas pelo cliente ou adquiridas de forma regular." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div ref={ref} className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
            <div className="pl-5">
              <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Dúvidas frequentes</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#000000] mb-4 tracking-tight">Perguntas frequentes</h2>
              <p className="text-lg text-[#8B939E] leading-relaxed">Tire suas dúvidas sobre nossos serviços.</p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-[#F5F7FA] rounded-xl px-5 border border-[#C8CDD4]/30 data-[state=open]:border-[#1686FF]/40 data-[state=open]:shadow-md transition-all duration-300">
                  <AccordionTrigger className="text-left font-display font-medium text-[#000000] hover:text-[#1686FF] py-4 text-[15px]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[#8B939E] leading-relaxed pb-4 text-[14px]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/ContactSection.tsx`

```tsx
import { useState } from "react";
import { MessageCircle, Clock, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ nome: "", telefone: "", servico: "", equipamento: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.nome}.\nTelefone: ${formData.telefone}\nServiço: ${formData.servico}\nEquipamento: ${formData.equipamento}\nMensagem: ${formData.mensagem}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#F5F7FA]">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="relative">
              <div className={`absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3AB5FF] to-[#0B56D8] rounded-full transition-all duration-500 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`} style={{ transitionDelay: "100ms" }} />
              <div className="pl-5">
                <span className="inline-block text-[#1686FF] font-semibold text-sm tracking-wider uppercase mb-3">Contato</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#000000] mb-6 leading-tight tracking-tight">Fale com a WallTech</h2>
                <p className="text-[#8B939E] leading-relaxed mb-8">Solicite um orçamento, tire suas dúvidas ou agende um serviço. Estamos prontos para atender você.</p>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <MessageCircle className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">WhatsApp</p>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#8B939E] text-sm hover:text-[#1686FF] transition-colors">(11) 96135-9962</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <Mail className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">E-mail</p>
                      <a href="mailto:contato@walltechoficial.com.br" className="text-[#8B939E] text-sm hover:text-[#1686FF] transition-colors">contato@walltechoficial.com.br</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <Clock className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">Horário de atendimento</p>
                      <p className="text-[#8B939E] text-sm">09:00 às 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <MapPin className="w-5 h-5 text-[#1686FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#000000] mb-0.5">Região atendida</p>
                      <p className="text-[#8B939E] text-sm">São Paulo Capital e Grande ABC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[#C8CDD4]/30">
              <h3 className="font-display font-semibold text-[#000000] text-xl mb-6">Solicite seu orçamento</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Nome</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Telefone</label>
                  <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Serviço desejado</label>
                  <select name="servico" value={formData.servico} onChange={handleChange} required className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200">
                    <option value="">Selecione</option>
                    <option value="Formatação">Formatação</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Upgrade">Upgrade (SSD/RAM)</option>
                    <option value="Limpeza">Limpeza interna</option>
                    <option value="Redes">Configuração de redes</option>
                    <option value="Locação">Locação de equipamentos</option>
                    <option value="Suporte empresarial">Suporte empresarial</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#000000] mb-1.5">Equipamento</label>
                  <input type="text" name="equipamento" value={formData.equipamento} onChange={handleChange} className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200" placeholder="Ex: Notebook Dell, PC montado" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#000000] mb-1.5">Mensagem</label>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-[#F5F7FA] border border-[#C8CDD4]/40 rounded-lg text-sm text-[#000000] placeholder-[#C8CDD4] focus:outline-none focus:border-[#1686FF] focus:ring-2 focus:ring-[#1686FF]/20 transition-all duration-200 resize-none" placeholder="Descreva o problema ou sua necessidade..." />
              </div>
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0B56D8] hover:bg-[#1686FF] text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#0B56D8]/25">
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `client/src/components/Footer.tsx`

```tsx
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Locação", href: "#locacao" },
  { label: "Empresas", href: "#empresas" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3AB5FF] via-[#1686FF] to-[#0B56D8]" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/manus-storage/logo-walltech-official_f4b875cb.png" alt="WallTech" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display font-bold text-lg tracking-tight">WALL<span className="text-[#1686FF]">TECH</span> Tecnologia</span>
            </div>
            <p className="text-[#C8CDD4] text-sm leading-relaxed max-w-sm mb-6">Venda, manutenção, suporte e locação de equipamentos para residências e empresas.</p>
            <div className="space-y-2.5 text-sm text-[#8B939E]">
              <a href="mailto:contato@walltechoficial.com.br" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <Mail className="w-4 h-4" /> contato@walltechoficial.com.br
              </a>
              <a href="https://instagram.com/walltech011" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <Instagram className="w-4 h-4" /> @walltech011
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3AB5FF] transition-colors">
                <MessageCircle className="w-4 h-4" /> (11) 96135-9962
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> São Paulo Capital e Grande ABC
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#1686FF] mb-4">Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollToSection(link.href)} className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#1686FF] mb-4">Legal</h4>
            <ul className="space-y-2.5 mb-6">
              <li><a href="/privacidade" className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="/termos" className="text-[#C8CDD4] hover:text-[#3AB5FF] transition-colors text-sm">Termos de Uso</a></li>
            </ul>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1686FF] hover:bg-[#3AB5FF] text-white font-semibold text-sm rounded-lg transition-all duration-200 active:scale-[0.97] shadow-lg shadow-blue-500/25">
              <MessageCircle className="w-4 h-4" /> Fale conosco
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8B939E]">&copy; {new Date().getFullYear()} WallTech Tecnologia. Todos os direitos reservados.</p>
          <p className="text-xs text-[#8B939E]/60">CNPJ: inserir posteriormente</p>
        </div>
      </div>
    </footer>
  );
}
```

### `client/src/components/WhatsAppFloat.tsx`

```tsx
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1686FF] hover:bg-[#3AB5FF] rounded-full flex items-center justify-center shadow-xl shadow-[#1686FF]/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0B56D8] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Solicitar orçamento
      </span>
      <span className="absolute inset-0 rounded-full bg-[#1686FF] animate-ping opacity-20" />
    </a>
  );
}
```

### `client/src/App.tsx`

```tsx
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
```

### `client/src/pages/Home.tsx`

```tsx
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import RentalSection from "@/components/RentalSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <RentalSection />
        <EnterpriseSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <AboutSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
```

### `client/src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
