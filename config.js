const CONFIG = {
  nome: "Baccana's Studio™",
  tagline: "Desenvolvimento Profissional Minecraft",

  discord: "https://discord.gg/x3sUtFxTdd",
  github: "https://github.com/baccanadev",
  youtube: "https://www.youtube.com/channel/UCAx0dHTGggc6i2E-vcrqrFw",

  webhook: (function() {
    const a = "discord.com/api/webhooks/";
    const b = "1485398140457849082";
    const c = "_n0y79jSLeKlyAhbqSp4VB64mkGOlHCMeQ9LsFb7IdYbiOzNgw-S9R5ZQBhrJQFuwDoc";
    return "https://" + a + b + "/" + c;
  })(),

  rateLimit: 30000,

  discordGuildId: "1353730097235890226",

  stats: {
    servidores: 50,
    clientes: 25
  },

  servicos: [
    {
      id: "otimizacao",
      icon: "fa-tachometer-alt",
      nome: "Otimizacao",
      desc: "TPS, JVM, limpeza, reducao de lag",
      preco: 60,
      destaque: "Melhor custo-beneficio"
    },
    {
      id: "plugins",
      icon: "fa-plug",
      nome: "Plugins",
      desc: "Economia, guerra, ranks, survival",
      preco: 90,
      destaque: ""
    },
    {
      id: "bots",
      icon: "fa-robot",
      nome: "Bot Discord",
      desc: "Integracao, rankup, logs",
      preco: 150,
      destaque: ""
    },
    {
      id: "geopol",
      icon: "fa-earth-americas",
      nome: "Geopolitico",
      desc: "Nacoes, guerra, economia e RP",
      preco: 50,
      destaque: "Mais acessivel"
    },
    {
      id: "site",
      icon: "fa-code",
      nome: "Web Site",
      desc: "Site profissional com painel",
      preco: 80,
      destaque: ""
    }
  ],

  testimonials: [
    {
      name: "Vitinho",
      discord: "vinicius_gg",
      text: "Otimizacao impecavel! Meu servidor foi de 12 TPS pra 20 TPS estavel. Recomendo demais!",
      rating: 5
    },
    {
      name: "Rafa",
      discord: "rafa_sky",
      text: "Configurou plugins de guerra no meu server, ficou show. Suporte pos-entrega nota 10.",
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
      desc: "Servidor mobile/console com sistema geopolitico completo",
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
      desc: "Sistema de integracao entre Discord e servidor Minecraft",
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
      a: "A maioria dos servicos fica pronto em 24h a 48h. Projetos maiores podem levar mais tempo, avisamos antes."
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
      q: "Como faco para contratar?",
      a: "Clique em 'Contratar' no servico desejado ou entre em contato pelo Discord para um orcamento personalizado."
    },
    {
      q: "Aceitais pagamento como?",
      a: "Aceitamos Pix, transferencia e gift cards. O pagamento e combinado antes do inicio do trabalho."
    }
  ],

  roadmap: [
    {
      data: "2026-04-25",
      nome: "Autenz Core",
      desc: "Sistema de integracao principal",
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
