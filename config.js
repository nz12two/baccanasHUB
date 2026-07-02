const CONFIG = {
  nome: "Baccana's Studio\u2122",
  tagline: "Desenvolvimento Profissional Minecraft",

  discord: "https://discord.gg/x3sUtFxTdd",
  github: "https://github.com/baccanadev",
  youtube: "https://youtube.com/@baccanasdev",
  discordUser: "baccanasdev",
  whatsapp: "5511999999999",

  apiUrl: "/api/contact",

  about: {
    story: "A Baccana's Studio\u2122 nasceu da paixão por Minecraft e desenvolvimento. Começamos configurando servidores para amigos e, com o tempo, percebemos que havia uma demanda enorme por serviços de qualidade no mercado brasileiro. Hoje atendemos dezenas de servidores, sempre com o mesmo cuidado: entrega testada, suporte de verdade e preço justo.",
    mission: "Oferecer desenvolvimento Minecraft com transparência, qualidade e atendimento próximo. Nosso objetivo é que cada cliente se sinta seguro durante todo o processo, sabendo exatamente o que está contratando e quando vai receber.",
    workPhilosophy: "Trabalhamos de forma organizada, com escopo definido, prazos realistas e comunicação direta. Nada de promessas vagas. Cada serviço é testado antes da entrega e acompanhado de suporte por 30 dias.",
    team: [
      {
        name: "BaccanaDev",
        role: "Desenvolvedor Minecraft",
        specialties: ["Servidores Minecraft", "Bots Discord", "Sistemas Web", "Design", "zNodes"],
        bio: "Desenvolvedor focado em servidores Minecraft, plugins, bots Discord e design gr\u00e1fico. Mant\u00e9m tutoriais e guias no Substack para ajudar comunidades a crescerem.",
        avatar: "",
        avatarBg: "linear-gradient(135deg, #6366f1, #22d3ee)",
        portfolioUrl: "https://baccanadev.vercel.app",
        social: {
          github: "https://github.com/baccanadev",
          youtube: "https://youtube.com/@baccanasdev",
          discord: "baccanadev"
        }
      },
      {
        name: "NZ",
        role: "Full Stack Developer",
        specialties: ["JavaScript", "Python", "React", "APIs", "Automa\u00e7\u00f5es", "Bots"],
        bio: "Desenvolvedor full stack focado em criar solu\u00e7\u00f5es pr\u00e1ticas e confi\u00e1veis. Desenvolvo APIs, bots, automa\u00e7\u00f5es e sites que funcionam de forma est\u00e1vel e eficiente.",
        avatar: "assets/team/nz.webp",
        avatarBg: "linear-gradient(135deg, #f59e0b, #6366f1)",
        portfolioUrl: "https://github.com/nz12two/portfolio",
        social: {
          github: "https://github.com/nz12two",
          discord: "nz12two"
        }
      }
    ]
  },

  autoridade: [
    {
      icon: "fab fa-youtube",
      titulo: "YouTube",
      desc: "V\u00eddeos tutoriais mostrando configura\u00e7\u00f5es, otimiza\u00e7\u00f5es e solu\u00e7\u00f5es para servidores Minecraft. Conte\u00fado t\u00e9cnico gratuito que demonstra conhecimento pr\u00e1tico.",
      link: "https://youtube.com/@baccanasdev",
      linkText: "Ver canal",
      cor: "#ff0033"
    },
    {
      icon: "fas fa-newspaper",
      titulo: "Blog T\u00e9cnico",
      desc: "Artigos detalhados sobre plugins, otimiza\u00e7\u00e3o de TPS, configura\u00e7\u00e3o de servidores e integra\u00e7\u00f5es. Mais de 10 guias publicados no Substack.",
      link: "https://baccanadev.substack.com",
      linkText: "Ler artigos",
      cor: "#6366f1"
    },
    {
      icon: "fab fa-github",
      titulo: "GitHub",
      desc: "C\u00f3digo aberto de projetos como landing pages, bots e sistemas de integra\u00e7\u00e3o. Nosso c\u00f3digo est\u00e1 dispon\u00edvel para estudo e contribui\u00e7\u00e3o.",
      link: "https://github.com/baccanadev",
      linkText: "Ver reposit\u00f3rios",
      cor: "#22d3ee"
    }
  ],

  workProcess: [
    {
      icon: "fa-comments",
      titulo: "1. Primeiro Contato",
      desc: "Voc\u00ea entra em contato pelo Discord ou WhatsApp e conta sobre seu projeto."
    },
    {
      icon: "fa-search",
      titulo: "2. Entendimento",
      desc: "Analisamos suas necessidades, o tipo de servidor e o que voc\u00ea espera alcan\u00e7ar."
    },
    {
      icon: "fa-file-invoice-dollar",
      titulo: "3. Or\u00e7amento",
      desc: "Enviamos um or\u00e7amento claro com prazo, valor e o que est\u00e1 incluso. Sem surpresas."
    },
    {
      icon: "fa-tasks",
      titulo: "4. Planejamento",
      desc: "Definimos o cronograma e as etapas do desenvolvimento. Voc\u00ea sabe exatamente quando cada parte fica pronta."
    },
    {
      icon: "fa-code",
      titulo: "5. Desenvolvimento",
      desc: "Produzimos o servi\u00e7o com atualiza\u00e7\u00f5es peri\u00f3dicas. Voc\u00ea acompanha o progresso em tempo real."
    },
    {
      icon: "fa-sync-alt",
      titulo: "6. Acompanhamento",
      desc: "Durante o desenvolvimento, voc\u00ea recebe atualiza\u00e7\u00f5es e pode solicitar ajustes pelo caminho."
    },
    {
      icon: "fa-check-double",
      titulo: "7. Entrega",
      desc: "Tudo \u00e9 testado antes da entrega. O servi\u00e7o s\u00f3 \u00e9 finalizado quando est\u00e1 funcionando 100%."
    },
    {
      icon: "fa-headset",
      titulo: "8. Garantia e Suporte",
      desc: "30 dias de suporte p\u00f3s-entrega. Se algo parar de funcionar, corrigimos sem custo extra."
    }
  ],

  promocao: {
    ativa: false,
    tipo: 'escassez',    // 'escassez' | 'brinde' | 'desconto'
    texto: 'Últimas 2 vagas',
    detalhe: 'Suporte prioritário',
    porcentagem: 20,       // usado apenas se tipo === 'desconto'
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
      nome: "Otimiza\u00e7\u00e3o",
      desc: "TPS, JVM, limpeza, redu\u00e7\u00e3o de lag",
      preco: 60,
      destaque: "Melhor custo-benef\u00edcio",
      features: ["Otimiza\u00e7\u00e3o de JVM", "Limpeza de chunks", "Redu\u00e7\u00e3o de lag", "Relat\u00f3rio TPS", "Suporte 30 dias"],
      prazo: "24h"
    },
    {
      id: "plugins",
      icon: "fa-plug",
      nome: "Plugins",
      desc: "Economia, guerra, ranks, survival",
      preco: 90,
      destaque: "",
      features: ["Configura\u00e7\u00e3o completa", "Plugins de economia", "Sistema de ranks", "Prote\u00e7\u00e3o de terreno", "Suporte 30 dias"],
      prazo: "48h"
    },
    {
      id: "bots",
      icon: "fa-robot",
      nome: "Bot Discord",
      desc: "Integra\u00e7\u00e3o, rankup, logs",
      preco: 150,
      destaque: "",
      features: ["Comandos personalizados", "Integra\u00e7\u00e3o Minecraft", "Sistema de rankup", "Logs autom\u00e1ticos", "Dashboard web"],
      prazo: "72h"
    },
    {
      id: "geopol",
      icon: "fa-earth-americas",
      nome: "Geopol\u00edtico",
      desc: "Na\u00e7\u00f5es, guerra, economia e RP",
      preco: 50,
      destaque: "Mais acess\u00edvel",
      features: ["Sistema de na\u00e7\u00f5es", "Economia pr\u00f3pria", "Guerra e alian\u00e7as", "Mapa interativo", "Suporte 30 dias"],
      prazo: "48h"
    },
    {
      id: "site",
      icon: "fa-code",
      nome: "Web Site",
      desc: "Site profissional com painel",
      preco: 80,
      destaque: "",
      features: ["Design responsivo", "Painel admin", "Integra\u00e7\u00e3o Discord", "Hospedagem inclusa", "Suporte 30 dias"],
      prazo: "48h"
    }
  ],

  testimonials: [
    {
      name: "Vitinho",
      discord: "vinicius_gg",
      server: "Rede Banz",
      role: "Dono do servidor",
      text: "Otimiza\u00e7\u00e3o impec\u00e1vel! Meu servidor foi de 12 TPS pra 20 TPS est\u00e1vel. Recomendo demais!",
      rating: 5,
      avatar: "",
      hasPrint: false
    },
    {
      name: "Rafa",
      discord: "rafa_sky",
      server: "SkyWars RPG",
      role: "Administrador",
      text: "Configurou plugins de guerra no meu server, ficou show. Suporte p\u00f3s-entrega nota 10.",
      rating: 5,
      avatar: "",
      hasPrint: false
    },
    {
      name: "Lucas",
      discord: "lucas_mc",
      server: "CraftLand",
      role: "Fundador",
      text: "Bot do Discord completo e funcionando perfeitamente. Entrega r\u00e1pida e bem-feita.",
      rating: 5,
      avatar: "",
      hasPrint: false
    },
    {
      name: "Pedro",
      discord: "pedrocraft",
      server: "PedroCraft Network",
      role: "CEO",
      text: "Site profissional pro meu servidor, superou expectativas. Pre\u00e7o justo pelo trabalho.",
      rating: 5,
      avatar: "",
      hasPrint: false
    }
  ],

  portfolio: [
    {
      nome: "Rede Banz",
      categoria: "Servidor Minecraft",
      desc: "Servidor mobile/console com sistema geopol\u00edtico completo, na\u00e7\u00f5es, guerra e economia pr\u00f3pria.",
      tags: ["geopol", "plugins"],
      tecnologias: ["ZNODES", "EcoPlugins", "GeyserMC", "ViaVersion"],
      desafio: "Criar um servidor cross-plataforma (mobile + PC) com sistema geopol\u00edtico funcional e economia equilibrada.",
      solucao: "Configuramos o ZNODES para territ\u00f3rios, implementamos economia com plugins customizados e garantimos compatibilidade Java+Bedrock via GeyserMC.",
      cor: "#6366f1",
      imagem: "assets/portfolio/icon_redebanz.png"     
    },
    {
      nome: "HavenMC",
      categoria: "Rede Survival",
      desc: "Rede de Survival com economia, ranks e loja virtual integrada ao Discord.",
      tags: ["plugins", "site"],
      tecnologias: ["EconomyAPI", "Rankup", "ShopGUI+", "DiscordSRV"],
      desafio: "Integrar loja virtual, ranks autom\u00e1ticos e sincronia com Discord em um servidor survival est\u00e1vel.",
      solucao: "Criamos um site com painel admin, configuramos ranks por progress\u00e3o e integramos tudo ao Discord via bot.",
      cor: "#22d3ee",
      imagem: ""     // assets/portfolio/havenmc.jpg
    },
    {
      nome: "Autenz Core",
      categoria: "Sistema de Integra\u00e7\u00e3o",
      desc: "Sistema de integra\u00e7\u00e3o entre Discord e servidor Minecraft com sincronia de cargos e ranks.",
      tags: ["bots", "plugins"],
      tecnologias: ["Discord.js", "Java Plugin", "MySQL"],
      desafio: "Sincronizar cargos do Discord com ranks do servidor em tempo real, sem delay.",
      solucao: "Desenvolvemos um plugin Java + bot Discord que se comunicam via banco de dados compartilhado, sincronizando em segundos.",
      cor: "#10b981",
      imagem: ""     // assets/portfolio/autenz-core.jpg
    },
    {
      nome: "Project Nexus",
      categoria: "Modo de Jogo Customizado",
      desc: "Modo de jogo customizado com sistemas exclusivos de progress\u00e3o e combate.",
      tags: ["plugins", "otimizacao"],
      tecnologias: ["Plugin Custom", "Citizens", "MythicMobs"],
      desafio: "Criar um modo de jogo \u00fanico com mec\u00e2nicas pr\u00f3prias, mantendo TPS est\u00e1vel mesmo com muitos jogadores.",
      solucao: "Desenvolvemos plugin do zero com c\u00f3digo otimizado e configuramos MythicMobs para mobs inteligentes sem sobrecarregar o servidor.",
      cor: "#f59e0b",
      imagem: ""     // assets/portfolio/project-nexus.jpg
    }
  ],

  faq: [
    {
      q: "Quanto tempo demora a entrega?",
      a: "A maioria dos servi\u00e7os fica pronto em 24h a 48h. Projetos maiores podem levar mais tempo, avisamos antes."
    },
    {
      q: "Preciso passar acesso ao meu servidor?",
      a: "Sim, precisamos de acesso via console ou FileZilla para aplicar as configura\u00e7\u00f5es. Totalmente seguro."
    },
    {
      q: "Oferecem garantia?",
      a: "Sim! Se algo parar de funcionar ap\u00f3s a entrega, corrigimos sem custo adicional por at\u00e9 30 dias."
    },
    {
      q: "Como fa\u00e7o para contratar?",
      a: "Clique em 'Or\u00e7amento' no servi\u00e7o desejado ou entre em contato pelo Discord para um or\u00e7amento personalizado."
    },
    {
      q: "Quais formas de pagamento voc\u00eas aceitam?",
      a: "Aceitamos Pix, transfer\u00eancia e gift cards. O pagamento \u00e9 combinado antes do in\u00edcio do trabalho."
    },
    {
      q: "E se eu n\u00e3o gostar do resultado?",
      a: "Trabalhamos com revis\u00f5es at\u00e9 voc\u00ea ficar satisfeito. Seu feedback \u00e9 parte do processo."
    },
    {
      q: "Preciso pagar antes de come\u00e7ar?",
      a: "Trabalhamos com 50% de entrada e 50% na entrega. Confian\u00e7a \u00e9 via de m\u00e3o dupla."
    },
    {
      q: "Voc\u00eas atendem qualquer vers\u00e3o do Minecraft?",
      a: "Sim, trabalhamos com Java Edition (qualquer vers\u00e3o) e tamb\u00e9m servidores multi-plataforma Java+Bedrock."
    }
  ],

  comparar: [
    { feature: "Suporte p\u00f3s-entrega", nos: "30 dias", eles: "15 dias" },
    { feature: "Pagamento parcelado", nos: "50% entrada + 50% entrega", eles: "100% adiantado" },
    { feature: "Plugins personalizados", nos: "Sob medida pro seu server", eles: "Gen\u00e9rico" },
    { feature: "Entrega", nos: "24h a 48h", eles: "1 a 2 semanas" },
    { feature: "Revis\u00f5es", nos: "Ilimitadas", eles: "Limitadas" },
    { feature: "Suporte T\u00e9cnico", nos: "Direto com dev", eles: "Ticket automatizado" },
    { feature: "Garantia", nos: "30 dias", eles: "7 dias" }
  ],

  artigos: [
    {
      id: "znodes-geopolitica",
      icon: "fa-earth-americas",
      titulo: "ZNODES - Geopol\u00edtica no Minecraft Server",
      resumo: "Guia completo do plugin znodes que transforma seu servidor em um mundo geopol\u00edtico com territ\u00f3rios, recursos e economias.",
      categoria: "Plugins",
      data: "2026-05-15",
      url: "https://baccanadev.substack.com/p/geopolitica-no-minecraft-server-parte",
      arquivo: "artigos/znodes-geopolitica.html"
    },
    {
      id: "criar-server-5-min",
      icon: "fa-cube",
      titulo: "Criar servidor Minecraft em 5 minutos",
      resumo: "Crie e hospede seu servidor de Minecraft no seu pr\u00f3prio PC em 5 minutos, sem pagar nada.",
      categoria: "Tutoriais",
      data: "2025-12-03",
      url: "https://baccanadev.substack.com/p/criar-minecraft-server-em-5-minutos",
      arquivo: "artigos/criar-server-5-min.html"
    },
    {
      id: "java-bedrock",
      icon: "fa-users",
      titulo: "Servidor Java e Bedrock",
      resumo: "Aprenda a liberar seu servidor para jogadores de todas as plataformas: mobile, console e PC no mesmo servidor.",
      categoria: "Tutoriais",
      data: "2026-04-28",
      url: "https://baccanadev.substack.com/p/servidor-java-e-bedrock",
      arquivo: "artigos/java-bedrock.html"
    },
    {
      id: "dynmap-tempo-real",
      icon: "fa-map",
      titulo: "Mapa do Minecraft em tempo real",
      resumo: "Aprenda a configurar o plugin Dynmap e tenha um mapa ao vivo do seu servidor, acess\u00edvel pelo navegador.",
      categoria: "Plugins",
      data: "2026-04-10",
      url: "https://baccanadev.substack.com/p/mapa-do-minecraft-em-tempo-real",
      arquivo: "artigos/dynmap-tempo-real.html"
    },
    {
      id: "scoreboard-plugin",
      icon: "fa-table",
      titulo: "Scoreboard no servidor Minecraft",
      resumo: "Crie scoreboards personalizados no seu servidor usando plugins. Deixe seu servidor mais bonito e informativo.",
      categoria: "Plugins",
      data: "2026-03-20",
      url: "https://baccanadev.substack.com/p/scoreboard-em-servidor-de-minecraft",
      arquivo: "artigos/scoreboard-plugin.html"
    },
    {
      id: "server-properties",
      icon: "fa-cog",
      titulo: "Guia do server.properties",
      resumo: "Entenda o arquivo server.properties, a configura\u00e7\u00e3o principal de qualquer servidor Minecraft Java.",
      categoria: "Tutoriais",
      data: "2026-03-05",
      url: "https://baccanadev.substack.com/p/serverproperties-minecraft-server",
      arquivo: "artigos/server-properties.html"
    },
    {
      id: "otimizar-tps",
      icon: "fa-tachometer-alt",
      titulo: "Como otimizar o TPS do seu servidor",
      resumo: "Dicas pr\u00e1ticas para manter seu servidor rodando a 20 TPS est\u00e1vel, mesmo com muitos jogadores online.",
      categoria: "Otimiza\u00e7\u00e3o",
      data: "2026-02-15",
      arquivo: "artigos/otimizar-tps.html"
    },
    {
      id: "plugins-essenciais",
      icon: "fa-plug",
      titulo: "Plugins essenciais para todo servidor",
      resumo: "Lista dos plugins que n\u00e3o podem faltar no seu servidor, desde economia at\u00e9 prote\u00e7\u00e3o de terrenos.",
      categoria: "Plugins",
      data: "2026-02-28"
    },
    {
      id: "migrar-host",
      icon: "fa-server",
      titulo: "Guia de migra\u00e7\u00e3o de host Minecraft",
      resumo: "Passo a passo para migrar seu servidor de hospedagem sem perder dados nem tempo de atividade.",
      categoria: "Tutoriais",
      data: "2026-02-10"
    },
    {
      id: "bot-discord-integracao",
      icon: "fa-robot",
      titulo: "Como um bot Discord pode transformar seu server",
      resumo: "Automatize rankups, logs e integra\u00e7\u00f5es entre seu servidor Minecraft e o Discord.",
      categoria: "Bots",
      data: "2026-01-20"
    }
  ],

  roadmap: [
    {
      data: "2026-04-25",
      nome: "Autenz Core",
      desc: "Sistema de integração principal",
      status: "Planejamento",
      progresso: 15
    },
    {
      data: "2026-04-10",
      nome: "Rede Banz",
      desc: "Servidor mobile/console",
      status: "desenvolvimento",
      progresso: 88
    },
    {
      data: "2026-05-07",
      nome: "Dashboard",
      desc: "Painel de controle",
      status: "planejado",
      progresso: 3
    },
    {
      data: "2026-06-01",
      nome: "Site Oficial(Rede banz)",
      desc: "Ranking e loja",
      status: "em-breve",
      progresso: 0
    }
  ]
};
