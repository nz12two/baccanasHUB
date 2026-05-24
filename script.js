let lastWebhookTime = 0;

document.addEventListener('DOMContentLoaded', initAll);

function initAll() {
  renderServices();
  renderPlans();
  renderPortfolio();
  renderRoadmap();
  renderTestimonials();
  renderFAQ();
  animateStats();
  initScrollAnimations();
  initScrollEffects();
  initContato();
  initMenu();
  initWidget();
  initModal();
  initNavLinks();
  initFAQ();
  initDCWidget();
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = CONFIG.servicos.map((s, i) => `
    <div class="service-card" data-delay="${i * 0.1}">
      ${s.destaque ? `<span class="servico-destaque">${s.destaque}</span>` : ''}
      <div class="service-icon"><i class="fas ${s.icon}"></i></div>
      <h3>${s.nome}</h3>
      <p>${s.desc}</p>
      <span class="service-price">R$ ${s.preco}</span>
      <button class="btn btn-primary btn-contratar" data-servico-id="${s.id}">
        <i class="fas fa-shopping-cart"></i> Contratar
      </button>
    </div>
  `).join('');
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
    return `
      <div class="roadmap-item" data-delay="${i * 0.1}">
        <div class="roadmap-header">
          <span class="roadmap-month">${mes}</span>
          <span class="roadmap-day">${data.getUTCDate()}</span>
        </div>
        <div class="roadmap-body">
          <h3>${r.nome}</h3>
          <p>${r.desc}</p>
          <span class="roadmap-status status-${r.status}">${r.status}</span>
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

  document.querySelectorAll('.service-card, .plan-card, .roadmap-item, .testimonial-card, .faq-item, .portfolio-card, .step').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('.feature-card').forEach((el, i) => {
    el.style.animationDelay = (i * 0.15) + 's';
    el.classList.add('animate-in');
  });
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

function initContato() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const discord = document.getElementById('discordId').value.trim();
    const msg = document.getElementById('message').value.trim();

    if (!nome || !discord || !msg) {
      notify('Preencha todos os campos', 'error');
      return;
    }

    await enviarWebhook("Nova mensagem!", [
      { name: "Nome", value: nome },
      { name: "Discord", value: discord },
      { name: "Mensagem", value: msg }
    ]);
    notify("Enviado!", "success");
    form.reset();
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
    toggle.style.display = panel.classList.contains('show') ? 'none' : 'flex';
  });

  const closeBtn = document.querySelector('.widget-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('show');
      toggle.style.display = 'flex';
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
    const btn = e.target.closest('.btn-contratar');
    if (!btn) return;
    const servicoId = btn.dataset.servicoId;
    const servico = CONFIG.servicos.find(s => s.id === servicoId);
    if (servico) showContratarModal(servico);
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
    { name: "Servico", value: servico.nome },
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
    orcamento: "Ola! Gostaria de fazer um orcamento.",
    duvida: "Ola! Tenho uma duvida sobre os servicos.",
    urgente: "Ola! Preciso de atendimento urgente!"
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
    if (toggle) toggle.style.display = 'flex';
  });
}

function initDCWidget() {
  const iframe = document.getElementById('dcIframe');
  if (!iframe) return;

  const guildId = CONFIG.discordGuildId;
  if (guildId) {
    iframe.src = `https://discord.com/widget?id=${guildId}&theme=dark`;
    try {
      fetch(`https://discord.com/api/guilds/${guildId}/widget.json`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (data && data.presence_count !== undefined) {
            document.getElementById('dcMemberCount').textContent = data.presence_count;
          }
        })
        .catch(() => {});
    } catch (e) {}
  } else {
    iframe.style.display = 'none';
    document.getElementById('dcMemberCount').textContent = '0';
  }
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
