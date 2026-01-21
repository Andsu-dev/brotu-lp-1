# Brotu Landing Page

Landing page para a Brotu - plataforma de growth organico para creators.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Rodar Localmente

**Pre-requisitos:** Node.js 18+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Rodar o app:
   ```bash
   npm run dev
   ```

3. Acessar em `http://localhost:5173`

## Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de producao
- `npm run preview` - Preview do build
- `npm run lint` - Verificacao de tipos TypeScript

## Estrutura

```
brotu-lp/
├── components/        # Componentes React
├── context/          # Contextos (WaitlistContext)
├── public/           # Assets estaticos (stickers, mascote)
├── App.tsx           # Componente principal
├── index.tsx         # Entry point
└── index.html        # HTML base
```

## Funcionalidades

- Modal de lista de espera global
- Navegacao suave entre secoes
- Design retro/neobrutalism
- Responsivo
- Stickers decorativos da marca
