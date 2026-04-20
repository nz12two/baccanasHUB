/* ============================================
   CONFIGURAÇÕES BACCANAS DEV
   ============================================ */

const CONFIG = {
  // Configurações gerais
  nome: "Baccanas Dev",
  tagline: "Desenvolvimento Profissional Minecraft",
  
  // Links
  discord: "https://discord.gg/x3sUtFxTdd",
  github: "https://github.com/baccanadev",
  youtube: "https://www.youtube.com/channel/UCAx0dHTGggc6i2E-vcrqrFw",
  
  // Webhook Discord (para pedidos e mensagens)
  webhook: "https://discord.com/api/webhooks/1485398140457849082/_n0y79jSLeKlyAhbqSp4VB64mkGOlHCMeQ9LsFb7IdYbiOzNgw-S9R5ZQBhrJQFuwDoc",
  
  // Estatísticas (animated on load)
  stats: {
    servidores: 50,
    clientes: 25,
    anos: "2+",
    nota: "5.0"
  },
  
  // Serviços oferecidos
  servicos: [
    {
      id: "otimizacao",
      icon: "fa-tachometer-alt",
      nome: "Otimização",
      desc: "TPS, JVM, limpeza, redução de lag",
      preco: 60
    },
    {
      id: "plugins",
      icon: "fa-plug",
      nome: "Plugins",
      desc: "Economia, guerra, ranks, survival",
      preco: 90
    },
    {
      id: "bots",
      icon: "fa-robot",
      nome: "Bot Discord",
      desc: "Integração, rankup, logs",
      preco: 150
    },
    {
      id: "geopol",
      icon: "fa-earth-americas",
      nome: "Geopolítico",
      desc: "Países, guerra, RP",
      preco: 50
    },
    {
      id: "site",
      icon: "fa-code",
      nome: "Web Site",
      desc: "Site profissional",
      preco: 80
    }
  ],
  
  // Roadmap / Calendário de lançamentos
  roadmap: [
    {
      data: "2026-04-25",
      nome: "Autenz Core",
      desc: "Sistema de integração principal",
      status: "em-breve"
    },
    {
      data: "2026-04-10",
      nome: "Rede Banz",
      desc: "Servidor mobile/console",
      status: "desenvolvimento"
    },
    {
      data: "2026-05-07",
      nome: "Dashboard",
      desc: "Painel de controle",
      status: "planejado"
    },
    {
      data: "2026-06-01",
      nome: "Site Oficial",
      desc: "Ranking e loja",
      status: "em-breve"
    }
  ]
};