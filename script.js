let lastWebhookTime = 0;

document.addEventListener('DOMContentLoaded', initAll);

function initAll() {
  renderServices();
  renderPlans();
  renderPortfolio();
  renderRoadmap();
  renderTestimonials();
  renderFAQ();
  if (!CONFIG.promocao?.ativa) document.querySelector('.hero-promo')?.remove();
  renderComparar();
  initScrollAnimations();
  renderBlog();
  renderServerStatus();
  injectSchemaJSONLD();
  animateStats();
  initScrollEffects();
  initContato();
  initMenu();
  initWidget();
  initModal();
  initNavLinks();
  initFAQ();
  initDCWidget();
  initBackToTop();
  initParallax();
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const promo = CONFIG.promocao;
  const emPromo = (id) => promo?.ativa && (promo.tipo === 'todos' || promo.servicos.includes(id));
  const calcPreco = (preco) => Math.round(preco * (1 - promo.porcentagem / 100));
  grid.innerHTML = CONFIG.servicos.map((s, i) => {
    const desconto = emPromo(s.id);
    return `
    <div class="service-card${desconto ? ' em-promocao' : ''}" data-delay="${i * 0.1}">
      ${desconto ? `<span class="servico-promo">-${promo.porcentagem}%</span>` : ''}
      ${s.destaque ? `<span class="servico-destaque">${s.destaque}</span>` : ''}
      <div class="service-icon"><i class="fas ${s.icon}"></i></div>
      <h3>${s.nome}</h3>
      <p>${s.desc}</p>
      ${desconto
        ? `<span class="service-price"><span class="price-original">R$ ${s.preco}</span> R$ ${calcPreco(s.preco)}</span>`
        : `<span class="service-price">R$ ${s.preco}</span>`}
      <div style="display:flex;gap:0.5rem">
        <button class="btn btn-outline btn-detalhes" data-servico-id="${s.id}" style="flex:1">
          <i class="fas fa-info-circle"></i> Detalhes
        </button>
        <button class="btn btn-primary btn-contratar" data-servico-id="${s.id}" style="flex:1">
          <i class="fas fa-shopping-cart"></i> Contratar
        </button>
      </div>
    </div>
  `}).join('');
}

function renderPlans() {
  const grid = document.getElementById('plansGrid');
  if (!grid) return;
  const planos = CONFIG.servicos.slice(0, 3);
  grid.innerHTML = planos.map((p, i) => `
    <div class="plan-card ${i === 1 ? 'featured' : ''}" data-delay="${i * 0.1}">
      ${i === 1 ? '<span class="plan-badge">Mais Procurado</span>' : ''}
      <div class="service-icon" style="margin:0 auto 1rem"><i class="fas ${p.icon}"></i></div>
      <h3>${p.nome}</h3>
      <p>${p.desc}</p>
      <span class="plan-price">R$ ${p.preco}</span>
      <button class="btn btn-primary btn-contratar" data-servico-id="${p.id}">
        <i class="fas fa-shopping-cart"></i> Contratar
      </button>
    </div>
  `).join('');
}

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid || !CONFIG.portfolio) return;
  grid.innerHTML = CONFIG.portfolio.map((p, i) => `
    <div class="portfolio-card" data-delay="${i * 0.15}">
      <div class="portfolio-image" style="background:linear-gradient(135deg, ${p.cor}, ${p.cor}88)">
        <div class="portfolio-shine"></div>
        <i class="fas fa-server"></i>
      </div>
      <div class="portfolio-body">
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="portfolio-tags">
          ${p.tags.map(t => {
            const sv = CONFIG.servicos.find(s => s.id === t);
            return `<span class="portfolio-tag">${sv ? sv.nome : t}</span>`;
          }).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderRoadmap() {
  const container = document.getElementById('roadmapContainer');
  if (!container) return;
  const fmt = new Intl.DateTimeFormat('pt-BR', { month: 'long', timeZone: 'UTC' });
  container.innerHTML = CONFIG.roadmap.map((r, i) => {
    const data = new Date(r.data + 'T12:00:00Z');
    const mes = fmt.format(data);
    const p = r.progresso !== undefined ? r.progresso : 0;
    const statusLabel = r.status.replace(/-/g, ' ');
    return `
      <div class="roadmap-item" data-delay="${i * 0.1}">
        <div class="roadmap-header">
          <span class="roadmap-month">${mes}</span>
          <span class="roadmap-day">${data.getUTCDate()}</span>
        </div>
        <div class="roadmap-body">
          <h3>${r.nome}</h3>
          <p>${r.desc}</p>
          <span class="roadmap-status status-${r.status}">${statusLabel}</span>
          <div class="roadmap-progress">
            <div class="roadmap-progress-bar">
              <div class="roadmap-progress-fill" style="width:${p}%"></div>
            </div>
            <span class="roadmap-progress-label">${p}% concluído</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid || !CONFIG.testimonials) return;
  grid.innerHTML = CONFIG.testimonials.map((t, i) => `
    <div class="testimonial-card" data-delay="${i * 0.15}">
      <div class="testimonial-stars">
        ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
      </div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <span class="testimonial-name">${t.name}</span>
          <span class="testimonial-discord">@${t.discord}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container || !CONFIG.faq) return;
  container.innerHTML = CONFIG.faq.map((item, i) => `
    <div class="faq-item" data-delay="${i * 0.1}">
      <button class="faq-question">
        <span>${item.q}</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  const observeCards = () => {
    const obs = window.__scrollObserver;
    grid.querySelectorAll('.blog-card:not(.animate-in)').forEach(el => {
      if (obs) {
        obs.observe(el);
        if (el.getBoundingClientRect().top < window.innerHeight) {
          const delay = parseFloat(el.dataset.delay) || 0;
          setTimeout(() => el.classList.add('animate-in'), delay * 1000);
        }
      } else {
        el.classList.add('animate-in');
      }
    });
  };

  const fmt = (d) => { try { return new Date(d + 'T12:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' }); } catch { return ''; } };

  const renderCards = (items, prefix) => {
    grid.innerHTML = items.map((a, i) => {
      const cls = i === 0 ? 'blog-card blog-card-featured' : 'blog-card';
      return `
        <div class="${cls}" data-delay="${i * 0.15}" data-index="${prefix}${i}">
          <div class="blog-card-icon"><i class="fas ${a.icon || 'fa-cube'}"></i></div>
          <div>
            <h3>${a.titulo}</h3>
            <p>${a.resumo}</p>
            <div class="blog-card-footer">
              <span class="blog-card-date"><i class="far fa-calendar-alt"></i> ${fmt(a.data)}</span>
              <button class="blog-card-btn" data-index="${prefix}${i}">Ler mais <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      `;
    }).join('') +
    '<a href="https://bacanacat.substack.com" target="_blank" class="blog-substack-link"><i class="fas fa-external-link-alt"></i> Ver todos no Substack</a>';
    observeCards();
  };

  fetch('https://bacanacat.substack.com/api/v1/posts?limit=3')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(posts => {
      if (!posts || !posts.length) throw new Error('empty');
      window.__blogPosts = posts;
      renderCards(posts.map(p => ({
        titulo: p.title,
        resumo: (p.truncated_body_text || p.description || '').substring(0, 200),
        data: (p.post_date || p.published_date || '').substring(0, 10),
        icon: 'fa-cube'
      })), 'api-');
    })
    .catch(() => {
      if (!CONFIG.artigos) return;
      renderCards(CONFIG.artigos.slice(0, 3), '');
    });
}

function renderComparar() {
  const container = document.getElementById('compararTable');
  if (!container || !CONFIG.comparar) return;

  let html = '<table class="comparar-table" data-delay="0">';
  html += '<thead><tr><th></th><th><i class="fas fa-crown"></i> Nós</th><th>Concorrência</th></tr></thead><tbody>';

  CONFIG.comparar.forEach(item => {
    html += `<tr><td>${item.feature}</td><td><span class="cmp-nos">${item.nos}</span></td><td><span class="cmp-eles">${item.eles}</span></td></tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

function clearSkeleton(el) {
  if (el) el.classList.remove('skeleton', 'skeleton-text', 'skeleton-text-short');
}

function renderServerStatus() {
  const badge = document.getElementById('serverBadge');
  if (!badge || !CONFIG.serverIp) return;
  const dot = document.getElementById('sbdDot');
  const players = document.getElementById('sbdPlayers');
  const ip = document.getElementById('sbdIp');
  const versao = document.getElementById('sbdVersao');
  const ping = document.getElementById('sbdPing');

  ip.textContent = CONFIG.serverIp;

  fetch('https://api.mcsrvstat.us/2/' + CONFIG.serverIp)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      clearSkeleton(dot); clearSkeleton(players);

      if (data.online) {
        dot.className = 'server-badge-dot online';
        players.textContent = data.players?.online ?? '?';
        versao.textContent = data.version || '?';
        ping.textContent = (data.debug?.ping ?? '?') + 'ms';
      } else {
        dot.className = 'server-badge-dot offline';
        players.textContent = '0';
        versao.textContent = '--';
        ping.textContent = '--';
      }
    })
    .catch(() => {
      clearSkeleton(dot); clearSkeleton(players);
      dot.className = 'server-badge-dot offline';
      players.textContent = '?';
      versao.textContent = '?';
      ping.textContent = '?';
    });
}

function injectSchemaJSONLD() {
  const precoMin = Math.min(...CONFIG.servicos.map(s => s.preco));
  const precoMax = Math.max(...CONFIG.servicos.map(s => s.preco));
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": CONFIG.nome,
    "description": CONFIG.tagline + ". " + CONFIG.servicos.map(s => s.nome + " - R$" + s.preco).join("; "),
    "url": "https://baccanas.studio",
    "image": "https://baccanas.studio/assets/favicon.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": CONFIG.testimonials ? CONFIG.testimonials.length : "0",
      "bestRating": "5"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": precoMin,
      "highPrice": precoMax,
      "offerCount": CONFIG.servicos.length
    },
    "areaServed": "Brazil",
    "priceRange": "R$ " + precoMin + " - R$ " + precoMax
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function animateStats() {
  const s = document.getElementById('statServers');
  const c = document.getElementById('statClients');
  if (!s || !c) return;

  const statsSection = s.closest('.hero-stats');
  if (!statsSection) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (animated) return;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animated = true;
        observer.disconnect();
        const alvo = CONFIG.stats;
        let sv = 0, cv = 0;
        const interval = setInterval(() => {
          sv += Math.ceil(alvo.servidores / 50);
          cv += Math.ceil(alvo.clientes / 50);
          if (sv >= alvo.servidores) sv = alvo.servidores;
          if (cv >= alvo.clientes) cv = alvo.clientes;
          s.textContent = sv;
          c.textContent = cv;
          if (sv >= alvo.servidores && cv >= alvo.clientes) clearInterval(interval);
        }, 35);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
        const delay = parseFloat(entry.target.dataset.delay) || 0;
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay * 1000);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.service-card, .plan-card, .roadmap-item, .testimonial-card, .faq-item, .portfolio-card, .step, .feature-card, .blog-card, .comparar-table').forEach(el => {
    observer.observe(el);
  });

  window.__scrollObserver = observer;
}

function initScrollEffects() {
  const header = document.querySelector('header');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function openArticle(idx) {
  const modal = document.getElementById('articleModal');
  const body = document.getElementById('articleBody');

  const showModal = (titulo, categoria, data, html) => {
    document.getElementById('articleBadge').textContent = categoria || 'Artigo';
    document.getElementById('articleTitle').textContent = titulo;
    const fmt = data ? new Date(data + 'T12:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '';
    document.getElementById('articleMeta').innerHTML = fmt ? `<i class="far fa-calendar-alt"></i> ${fmt}` : '';
    body.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  if (typeof idx === 'string' && idx.startsWith('api-')) {
    const p = window.__blogPosts?.[parseInt(idx.slice(4))];
    if (!p) return;
    if (p.body) {
      showModal(p.title, 'Artigo', (p.post_date || p.published_date || '').substring(0, 10), p.body);
    } else if (p.canonical_url) {
      window.open(p.canonical_url, '_blank');
    }
    return;
  }

  const a = CONFIG.artigos?.[parseInt(idx)];
  if (!a) return;

  if (a.arquivo) {
    showModal(a.titulo, a.categoria, a.data,
      '<div class="article-loading"><i class="fas fa-spinner fa-spin"></i> Carregando...</div>');
    fetch(a.arquivo).then(r => r.ok ? r.text() : Promise.reject())
      .then(html => { body.innerHTML = html; })
      .catch(() => {
        body.innerHTML = '<p>Nao foi possivel carregar o artigo. <a href="' + (a.url || '#') + '" target="_blank">Abrir no Substack</a></p>';
      });
  } else if (a.conteudo) {
    showModal(a.titulo, a.categoria, a.data, a.conteudo);
  } else if (a.url) {
    window.open(a.url, '_blank');
  }
}

function closeArticle() {
  document.getElementById('articleModal').classList.remove('show');
  document.body.style.overflow = '';
}

document.addEventListener('click', e => {
  const card = e.target.closest('.blog-card');
  const btn = e.target.closest('.blog-card-btn');
  if (!card && !btn) return;
  const el = card || btn;
  const idx = el.dataset.index;
  if (idx === undefined) return;
  e.preventDefault();
  openArticle(idx);
});

document.getElementById('articleModalClose')?.addEventListener('click', closeArticle);
document.getElementById('articleModal')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeArticle();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('articleModal')?.classList.contains('show')) closeArticle();
});

function initContato() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const discord = document.getElementById('discordId').value.trim();
    const msg = document.getElementById('message').value.trim();
    const btn = document.getElementById('submitBtn');

    if (!nome || !discord || !msg) {
      notify('Preencha todos os campos', 'error');
      return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    const ok = await enviarWebhook("Nova mensagem!", [
      { name: "Nome", value: nome },
      { name: "Discord", value: discord },
      { name: "Mensagem", value: msg }
    ]);

    btn.disabled = false;
    btn.innerHTML = '<i class="fab fa-discord"></i> Solicitar Orçamento';

    if (ok) {
      notify("Enviado!", "success");
      form.reset();
    }
  });
}

function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav-menu');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.innerHTML = `<i class="fas fa-${nav.classList.contains('open') ? 'times' : 'bars'}"></i>`;
  });
}

function initNavLinks() {
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.nav-menu');
      const toggle = document.getElementById('menuToggle');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (toggle) toggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });
}

function initWidget() {
  const toggle = document.getElementById('widgetToggle');
  const panel = document.getElementById('widgetPanel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('show');
    toggle.classList.toggle('hidden');
  });

  const closeBtn = document.querySelector('.widget-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('show');
      toggle.classList.remove('hidden');
    });
  }

  document.querySelectorAll('.widget-quick button').forEach(btn => {
    btn.addEventListener('click', () => {
      quickReply(btn.dataset.quick);
    });
  });
}

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => fecharModal());
  overlay.addEventListener('click', e => {
    if (e.target === overlay) fecharModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });

  document.addEventListener('click', e => {
    const btnContratar = e.target.closest('.btn-contratar');
    if (btnContratar) {
      const servicoId = btnContratar.dataset.servicoId;
      const servico = CONFIG.servicos.find(s => s.id === servicoId);
      if (servico) {
        const promo = CONFIG.promocao;
        const emPromo = promo?.ativa && (promo.tipo === 'todos' || promo.servicos.includes(servico.id));
        const precoFinal = emPromo ? Math.round(servico.preco * (1 - promo.porcentagem / 100)) : servico.preco;
        const msg = `Olá! Quero contratar o servico de **${servico.nome}** por R$ ${precoFinal}.`;
        navigator.clipboard.writeText(msg).catch(() => {});
        notify('Mensagem copiada! Cole no Discord.', 'success');
        setTimeout(() => window.open(CONFIG.discord, '_blank'), 800);
      }
      return;
    }
    const btnDetalhes = e.target.closest('.btn-detalhes');
    if (btnDetalhes) {
      const servicoId = btnDetalhes.dataset.servicoId;
      const servico = CONFIG.servicos.find(s => s.id === servicoId);
      if (servico) showDetalhesModal(servico);
    }
  });
}

function showContratarModal(servico) {
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = `Contratar: ${servico.nome}`;

  body.innerHTML = `
    <div class="modal-info">
      <span class="modal-price">R$ ${servico.preco}</span>
      <p>${servico.desc}</p>
    </div>
    <div class="form-group">
      <label>Seu nome</label>
      <input type="text" id="modalNome" placeholder="Digite seu nome" required>
    </div>
    <div class="form-group">
      <label>Seu Discord</label>
      <input type="text" id="modalDiscord" placeholder="Ex: usuario" required>
    </div>
  `;

  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCancel">Cancelar</button>
    <button class="btn btn-primary" id="modalConfirm">
      <i class="fab fa-discord"></i> Confirmar Pedido
    </button>
  `;

  overlay.classList.add('show');

  document.getElementById('modalNome').focus();

  document.getElementById('modalCancel').addEventListener('click', fecharModal);

  document.getElementById('modalConfirm').addEventListener('click', async () => {
    const nome = document.getElementById('modalNome').value.trim();
    const discord = document.getElementById('modalDiscord').value.trim();
    if (!nome || !discord) {
      notify('Preencha todos os campos', 'error');
      return;
    }
    await contratar(servico.id, servico.preco);
    fecharModal();
  });
}

function showDetalhesModal(servico) {
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = servico.nome;

  body.innerHTML = `
    <div class="detail-header">
      <div class="service-icon" style="margin:0 auto 1rem"><i class="fas ${servico.icon}"></i></div>
      <h2>${servico.nome}</h2>
      <p>${servico.desc}</p>
    </div>
    <div class="detail-meta">
      <span><i class="fas fa-tag"></i> R$ ${servico.preco}</span>
      <span><i class="far fa-clock"></i> Entrega em ~${servico.prazo}</span>
      <span><i class="fas fa-shield-alt"></i> Garantia 30 dias</span>
    </div>
    <div class="detail-features">
      <h4><i class="fas fa-check-circle"></i> O que está incluso</h4>
      <ul>${servico.features.map(f => '<li><i class="fas fa-check"></i> ' + f + '</li>').join('')}</ul>
    </div>
  `;

  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCloseDetail">Fechar</button>
    <button class="btn btn-primary" id="modalContratarDetail">
      <i class="fas fa-shopping-cart"></i> Contratar
    </button>
  `;

  overlay.classList.add('show');

  document.getElementById('modalCloseDetail').addEventListener('click', fecharModal);
  document.getElementById('modalContratarDetail').addEventListener('click', () => {
    fecharModal();
    setTimeout(() => showContratarModal(servico), 300);
  });
}

function fecharModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('show');
}

async function contratar(servicoId, preco) {
  const servico = CONFIG.servicos.find(s => s.id === servicoId);
  if (!servico) return;

  const nome = document.getElementById('modalNome')?.value.trim();
  const discord = document.getElementById('modalDiscord')?.value.trim();
  if (!nome || !discord) {
    notify('Preencha todos os campos', 'error');
    return;
  }

  await enviarWebhook("Novo pedido!", [
    { name: "Cliente", value: nome },
    { name: "Discord", value: discord },
    { name: "Serviço", value: servico.nome },
    { name: "Valor", value: "R$ " + preco }
  ]);

  notify("Pedido enviado!", "success");
  setTimeout(() => window.open(CONFIG.discord, '_blank'), 1000);
}

async function enviarWebhook(titulo, campos) {
  if (!CONFIG.webhook) return;

  const agora = Date.now();
  if (agora - lastWebhookTime < CONFIG.rateLimit) {
    const restante = Math.ceil((CONFIG.rateLimit - (agora - lastWebhookTime)) / 1000);
    notify(`Aguarde ${restante}s para nova mensagem`, 'error');
    return false;
  }

  lastWebhookTime = agora;

  try {
    const res = await fetch(CONFIG.webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: titulo,
          color: 0x6366f1,
          fields: campos,
          footer: { text: CONFIG.nome },
          timestamp: new Date().toISOString()
        }]
      })
    });
    if (!res.ok) throw new Error('Falha no webhook');
    return true;
  } catch (e) {
    console.error(e);
    notify('Erro ao enviar mensagem. Tente novamente.', 'error');
    return false;
  }
}

function notify(msg, tipo) {
  const div = document.createElement('div');
  div.className = `toast toast-${tipo || 'info'}`;

  const icons = { success: "check-circle", error: "exclamation-circle", info: "info-circle" };
  div.innerHTML = `<i class="fas fa-${icons[tipo] || icons.info}"></i> ${msg}`;

  document.body.appendChild(div);

  setTimeout(() => {
    div.classList.add('toast-out');
    setTimeout(() => div.remove(), 300);
  }, 3000);
}

function quickReply(tipo) {
  const msgs = {
    orcamento: "Olá! Gostaria de fazer um orçamento.",
    duvida: "Olá! Tenho uma dúvida sobre os serviços.",
    urgente: "Olá! Preciso de atendimento urgente!"
  };

  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = 'Fale conosco';
  body.innerHTML = `
    <p style="margin-bottom:1rem;font-size:0.9rem">${msgs[tipo]}</p>
    <div class="form-group">
      <label>Seu Discord</label>
      <input type="text" id="modalDiscord" placeholder="Ex: usuario" required>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCancel">Cancelar</button>
    <button class="btn btn-primary" id="modalConfirm">
      <i class="fab fa-discord"></i> Enviar
    </button>
  `;

  overlay.classList.add('show');

  document.getElementById('modalCancel').addEventListener('click', fecharModal);

  document.getElementById('modalConfirm').addEventListener('click', async () => {
    const discord = document.getElementById('modalDiscord').value.trim();
    if (!discord) {
      notify('Informe seu Discord', 'error');
      return;
    }

    await enviarWebhook(`Quick: ${tipo}`, [
      { name: "Discord", value: discord },
      { name: "Mensagem", value: msgs[tipo] }
    ]);

    notify("Mensagem enviada!", "success");
    fecharModal();
    setTimeout(() => window.open(CONFIG.discord, '_blank'), 1000);

    const panel = document.getElementById('widgetPanel');
    const toggle = document.getElementById('widgetToggle');
    if (panel) panel.classList.remove('show');
    if (toggle) toggle.classList.remove('hidden');
  });
}

function initDCWidget() {
  const guildId = CONFIG.discordGuildId;
  if (!guildId) return;
  fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      const count = data?.presence_count ?? '?';
      document.getElementById('dcMemberCount') && (document.getElementById('dcMemberCount').textContent = count);
      document.getElementById('dcMemberCountContato') && (document.getElementById('dcMemberCountContato').textContent = count);
    })
    .catch(() => {});
}

function initFAQ() {
  document.addEventListener('click', e => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    if (!item) return;
    item.classList.toggle('open');
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initParallax() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY * 0.35;
        bg.style.transform = 'translateY(' + y + 'px)';
        ticking = false;
      });
      ticking = true;
    }
  });
}
