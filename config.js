const CONFIG = {
  nome: "Baccana's Studio™",
  tagline: "Desenvolvimento Profissional Minecraft",

  discord: "https://discord.gg/x3sUtFxTdd",
  github: "https://github.com/baccanadev",
  youtube: "https://youtube.com/@baccanasdev",

  webhook: (function() {
    const a = "discord.com/api/webhooks/";
    const b = "1485398140457849082";
    const c = "_n0y79jSLeKlyAhbqSp4VB64mkGOlHCMeQ9LsFb7IdYbiOzNgw-S9R5ZQBhrJQFuwDoc";
    return "https://" + a + b + "/" + c;
  })(),

  rateLimit: 30000,

  promocao: {
    ativa: false,
    porcentagem: 20,
    tipo: 'todos',
    servicos: []
  },

  discordGuildId: "1353730097235890226",

  stats: {
    servidores: 50,
    clientes: 25
  },

  servicos: [
    {
      id: "otimizacao",
      icon: "fa-tachometer-alt",
      nome: "Otimização",
      desc: "TPS, JVM, limpeza, redução de lag",
      preco: 60,
      destaque: "Melhor custo-benefício",
      features: ["Otimização de JVM", "Limpeza de chunks", "Redução de lag", "Relatório TPS", "Suporte 30 dias"],
      prazo: "24h"
    },
    {
      id: "plugins",
      icon: "fa-plug",
      nome: "Plugins",
      desc: "Economia, guerra, ranks, survival",
      preco: 90,
      destaque: "",
      features: ["Configuração completa", "Plugins de economia", "Sistema de ranks", "Proteção de terreno", "Suporte 30 dias"],
      prazo: "48h"
    },
    {
      id: "bots",
      icon: "fa-robot",
      nome: "Bot Discord",
      desc: "Integração, rankup, logs",
      preco: 150,
      destaque: "",
      features: ["Comandos personalizados", "Integração Minecraft", "Sistema de rankup", "Logs automáticos", "Dashboard web"],
      prazo: "72h"
    },
    {
      id: "geopol",
      icon: "fa-earth-americas",
      nome: "Geopolítico",
      desc: "Nações, guerra, economia e RP",
      preco: 50,
      destaque: "Mais acessível",
      features: ["Sistema de nações", "Economia própria", "Guerra e alianças", "Mapa interativo", "Suporte 30 dias"],
      prazo: "48h"
    },
    {
      id: "site",
      icon: "fa-code",
      nome: "Web Site",
      desc: "Site profissional com painel",
      preco: 80,
      destaque: "",
      features: ["Design responsivo", "Painel admin", "Integração Discord", "Hospedagem inclusa", "Suporte 30 dias"],
      prazo: "48h"
    }
  ],

  testimonials: [
    {
      name: "Vitinho",
      discord: "vinicius_gg",
      text: "Otimização impecável! Meu servidor foi de 12 TPS pra 20 TPS estável. Recomendo demais!",
      rating: 5
    },
    {
      name: "Rafa",
      discord: "rafa_sky",
      text: "Configurou plugins de guerra no meu server, ficou show. Suporte pós-entrega nota 10.",
      rating: 5
    },
    {
      name: "Lucas",
      discord: "lucas_mc",
      text: "Bot do Discord completo e funcionando perfeitamente. Entrega rapida e bem feita.",
      rating: 5
    },
    {
      name: "Pedro",
      discord: "pedrocraft",
      text: "Site profissional pro meu servidor, superou expectativas. Preco justo pelo trabalho.",
      rating: 5
    }
  ],

  portfolio: [
    {
      nome: "Rede Banz",
      desc: "Servidor mobile/console com sistema geopolítico completo",
      tags: ["geopol", "plugins"],
      cor: "#6366f1"
    },
    {
      nome: "HavenMC",
      desc: "Rede de Survival com economia, ranks e loja virtual",
      tags: ["plugins", "site"],
      cor: "#22d3ee"
    },
    {
      nome: "Autenz Core",
      desc: "Sistema de integração entre Discord e servidor Minecraft",
      tags: ["bots", "plugins"],
      cor: "#10b981"
    },
    {
      nome: "Project Nexus",
      desc: "Modo de jogo customizado com sistemas exclusivos",
      tags: ["plugins", "otimizacao"],
      cor: "#f59e0b"
    }
  ],

  faq: [
    {
      q: "Quanto tempo demora a entrega?",
      a: "A maioria dos serviços fica pronto em 24h a 48h. Projetos maiores podem levar mais tempo, avisamos antes."
    },
    {
      q: "Preciso passar acesso ao meu servidor?",
      a: "Sim, precisamos de acesso via console ou FileZilla para aplicar as configuracoes. Totalmente seguro."
    },
    {
      q: "Oferecem garantia?",
      a: "Sim! Se algo parar de funcionar apos a entrega, corrigimos sem custo adicional por ate 30 dias."
    },
    {
      q: "Como faço para contratar?",
      a: "Clique em 'Contratar' no serviço desejado ou entre em contato pelo Discord para um orçamento personalizado."
    },
    {
      q: "Aceitam pagamento como?",
      a: "Aceitamos Pix, transferência e gift cards. O pagamento é combinado antes do início do trabalho."
    }
  ],

  serverIp: "sd-br4.blazebr.com:27703",

  artigos: [
    {
      id: "znodes-geopolitica",
      icon: "fa-earth-americas",
      titulo: "ZNODES - Geopolítica no Minecraft Server",
      resumo: "Guia completo do plugin znodes que transforma seu servidor em um mundo geopolítico com territórios, recursos e economias.",
      categoria: "Plugins",
      data: "2026-05-15",
      url: "https://bacanacat.substack.com/p/geopolitica-no-minecraft-server-parte",
      arquivo: "artigos/znodes-geopolitica.html"
    },
    {
      id: "criar-server-5-min",
      icon: "fa-cube",
      titulo: "Criar servidor Minecraft em 5 minutos",
      resumo: "Crie e hospede seu servidor de Minecraft no seu próprio PC em 5 minutos, sem pagar nada.",
      categoria: "Tutoriais",
      data: "2025-12-03",
      url: "https://bacanacat.substack.com/p/criar-minecraft-server-em-5-minutos",
      arquivo: "artigos/criar-server-5-min.html"
    },
    {
      id: "java-bedrock",
      icon: "fa-users",
      titulo: "Servidor Java e Bedrock",
      resumo: "Aprenda a liberar seu servidor para jogadores de todas as plataformas: mobile, console e PC no mesmo servidor.",
      categoria: "Tutoriais",
      data: "2026-04-28",
      url: "https://bacanacat.substack.com/p/servidor-java-e-bedrock",
      arquivo: "artigos/java-bedrock.html"
    },
    {
      id: "dynmap-tempo-real",
      icon: "fa-map",
      titulo: "Mapa do Minecraft em tempo real",
      resumo: "Aprenda a configurar o plugin Dynmap e tenha um mapa ao vivo do seu servidor, acessível pelo navegador.",
      categoria: "Plugins",
      data: "2026-04-10",
      url: "https://bacanacat.substack.com/p/mapa-do-minecraft-em-tempo-real",
      arquivo: "artigos/dynmap-tempo-real.html"
    },
    {
      id: "scoreboard-plugin",
      icon: "fa-table",
      titulo: "Scoreboard no servidor Minecraft",
      resumo: "Crie scoreboards personalizados no seu servidor usando plugins. Deixe seu servidor mais bonito e informativo.",
      categoria: "Plugins",
      data: "2026-03-20",
      url: "https://bacanacat.substack.com/p/scoreboard-em-servidor-de-minecraft",
      arquivo: "artigos/scoreboard-plugin.html"
    },
    {
      id: "server-properties",
      icon: "fa-cog",
      titulo: "Guia do server.properties",
      resumo: "Entenda o arquivo server.properties, a configuração principal de qualquer servidor Minecraft Java.",
      categoria: "Tutoriais",
      data: "2026-03-05",
      url: "https://bacanacat.substack.com/p/serverproperties-minecraft-server",
      arquivo: "artigos/server-properties.html"
    },
    {
      id: "otimizar-tps",
      icon: "fa-tachometer-alt",
      titulo: "Como otimizar o TPS do seu servidor",
      resumo: "Dicas práticas para manter seu servidor rodando a 20 TPS estável, mesmo com muitos jogadores online.",
      categoria: "Otimização",
      data: "2026-02-15",
      arquivo: "artigos/otimizar-tps.html"
    },
    {
      id: "plugins-essenciais",
      icon: "fa-plug",
      titulo: "Plugins essenciais para todo servidor",
      resumo: "Lista dos plugins que não podem faltar no seu servidor, desde economia até proteção de terrenos.",
      categoria: "Plugins",
      data: "2026-02-28"
    },
    {
      id: "migrar-host",
      icon: "fa-server",
      titulo: "Guia de migração de host Minecraft",
      resumo: "Passo a passo para migrar seu servidor de hospedagem sem perder dados nem tempo de atividade.",
      categoria: "Tutoriais",
      data: "2026-02-10"
    },
    {
      id: "bot-discord-integracao",
      icon: "fa-robot",
      titulo: "Como um bot Discord pode transformar seu server",
      resumo: "Automatize rankups, logs e integrações entre seu servidor Minecraft e o Discord.",
      categoria: "Bots",
      data: "2026-01-20"
    }
  ],

  roadmap: [
    {
      data: "2026-04-25",
      nome: "Autenz Core",
      desc: "Sistema de integração principal",
      status: "em-breve",
      progresso: 75
    },
    {
      data: "2026-04-10",
      nome: "Rede Banz",
      desc: "Servidor mobile/console",
      status: "desenvolvimento",
      progresso: 45
    },
    {
      data: "2026-05-07",
      nome: "Dashboard",
      desc: "Painel de controle",
      status: "planejado",
      progresso: 20
    },
    {
      data: "2026-06-01",
      nome: "Site Oficial",
      desc: "Ranking e loja",
      status: "em-breve",
      progresso: 0
    }
  ]
};
