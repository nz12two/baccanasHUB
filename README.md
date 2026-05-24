# Baccana's Studio™

Landing page profissional para servicos de desenvolvimento Minecraft.

## Como usar

1. Edite `config.js` com seus dados (servicos, portfolio, Discord, webhook)
2. Hospede em qualquer servidor estatico (GitHub Pages, Netlify, Vercel)

### Discord Widget

Para o widget de membros online funcionar:
1. Discord > Config do servidor > Widget > Ativar
2. Copiar o Server ID e colar em `discordGuildId` no `config.js`

## Estrutura

```
index.html   → estrutura da pagina
style.css    → estilos
script.js    → logica e animacoes
config.js    → dados editaveis (servicos, portfolio, etc)
assets/      → imagens
```

Feito com HTML, CSS e JS puro. Zero dependencias.
