let lastWebhookTime = 0;
let submitting = false;

function sanitizeInput(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

document.addEventListener('DOMContentLoaded', initAll);

function initAll() {
  renderPromo();
  renderServices();
  renderAuthority();
  renderWorkProcess();
  renderAbout();
  renderPortfolio();
  renderTestimonials();
  renderFAQ();
  renderComparar();
  renderTermos();
  initScrollAnimations();
  renderBlog();
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
  initTermos();
}

function renderTermos() {
  const container = document.getElementById('termosContent');
  if (!container) return;

  const data = new Date().toLocaleDateString('pt-BR');

  container.innerHTML = `
    <p><strong>Última atualização:</strong> ${data}</p>

    <h4>1. Identificação das Partes</h4>
    <p><strong>Contratante:</strong> Cliente que solicita o serviço, doravante denominado "CONTRATANTE".</p>
    <p><strong>Contratada:</strong> Baccana's Studio&trade;, pessoa física responsável pelo desenvolvimento, doravante denominada "CONTRATADA".</p>
    <p><strong>Meio oficial de contato:</strong> Discord (usuário: baccanasdev) e WhatsApp (<span class="termos-placeholder">[INSERIR NÚMERO]</span>).</p>

    <h4>2. Objeto</h4>
    <p>O presente termo tem como objeto a prestação de serviços de desenvolvimento, configuração e/ou otimização para servidores Minecraft, conforme especificado no orçamento enviado ao CONTRATANTE antes do início dos trabalhos.</p>

    <h4>3. Orçamento e Aceitação</h4>
    <p>3.1. O orçamento é enviado por escrito (Discord, WhatsApp ou e-mail) e contém: descrição do serviço, prazo estimado, valor total e forma de pagamento.</p>
    <p>3.2. A contratação é formalizada mediante o aceite do orçamento e o pagamento da entrada de <strong>50% (cinquenta por cento) do valor total</strong>.</p>

    <h4>4. Pagamento</h4>
    <p>4.1. <strong>Entrada:</strong> 50% antes do início do desenvolvimento.</p>
    <p>4.2. <strong>Saldo:</strong> 50% na entrega do serviço, após validação do CONTRATANTE.</p>
    <p>4.3. <strong>Formas de pagamento aceitas:</strong> Pix, transferência bancária e gift cards, conforme combinado previamente.</p>

    <h4>5. Prazos</h4>
    <p>5.1. O prazo de entrega é estipulado no orçamento e começa a contar após o pagamento da entrada.</p>
    <p>5.2. Atrasos por parte do CONTRATANTE (como demora na resposta ou fornecimento de informações) podem estender o prazo proporcionalmente.</p>
    <p>5.3. A CONTRATADA se compromete a informar proativamente sobre qualquer imprevisto que possa afetar o prazo.</p>

    <h4>6. Entrega e Validação</h4>
    <p>6.1. O serviço é considerado entregue quando estiver funcionando conforme o escopo acordado.</p>
    <p>6.2. O CONTRATANTE tem até <strong>3 (três) dias úteis</strong> para testar e validar a entrega ou solicitar ajustes.</p>
    <p>6.3. Após a validação, o saldo restante (50%) deve ser pago em até <strong>2 (dois) dias úteis</strong>.</p>

    <h4>7. Garantia e Suporte Pós-Entrega</h4>
    <p>7.1. A CONTRATADA oferece <strong>30 (trinta) dias de suporte</strong> a partir da data de validação da entrega.</p>
    <p>7.2. Durante este período, correções de bugs ou problemas diretamente relacionados ao serviço prestado são realizadas <strong>sem custo adicional</strong>.</p>
    <p>7.3. A garantia não cobre: alterações feitas pelo CONTRATANTE, conflitos com plugins de terceiros não configurados pela CONTRATADA, ou problemas causados por atualizações do servidor/Minecraft.</p>

    <h4>8. Direitos Autorais e Propriedade Intelectual</h4>
    <p>8.1. Todo o código, configurações e materiais desenvolvidos especificamente para o CONTRATANTE são de propriedade do CONTRATANTE após o pagamento integral.</p>
    <p>8.2. A CONTRATADA pode utilizar o trabalho realizado em seu portfólio, salvo acordo em contrário.</p>
    <p>8.3. Plugins, bibliotecas e ferramentas de terceiros mantêm suas respectivas licenças originais.</p>

    <h4>9. Cancelamento e Reembolso</h4>
    <p>9.1. O CONTRATANTE pode cancelar o serviço a qualquer momento antes da entrega.</p>
    <p>9.2. Em caso de cancelamento antes do início do desenvolvimento, o valor da entrada é integralmente reembolsado.</p>
    <p>9.3. Em caso de cancelamento durante o desenvolvimento, o valor reembolsado é proporcional ao trabalho ainda não realizado.</p>
    <p>9.4. Após a validação da entrega, não há reembolso.</p>

    <h4>10. Disposições Gerais</h4>
    <p>10.1. A CONTRATADA não se responsabiliza por danos causados por mau uso, modificações não autorizadas ou acesso de terceiros ao servidor.</p>
    <p>10.2. A CONTRATADA não armazena dados sensíveis do CONTRATANTE além do necessário para a prestação do serviço.</p>
    <p>10.3. Este termo pode ser atualizado a qualquer momento. Versões anteriores ficam arquivadas mediante solicitação.</p>

    <p style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border-subtle);font-size:0.85rem;color:var(--text-muted);">
      <i class="fas fa-info-circle"></i> Este documento é um modelo. Os campos marcados com <span class="termos-placeholder">[DESTAQUE]</span> devem ser preenchidos com as informações reais antes da formalização de cada contrato.
    </p>
  `;
}

function renderPromo() {
  const el = document.getElementById('heroPromo');
  if (!el) return;
  const p = CONFIG.promocao;
  if (!p?.ativa) { el.remove(); return; }
  if (p.tipo === 'desconto') {
    el.innerHTML = `<span class="promo-pct">-${p.porcentagem}%</span>`;
  } else if (p.tipo === 'escassez') {
    el.innerHTML = `<span class="promo-main">${p.texto}</span><span class="promo-sub">${p.detalhe}</span>`;
  } else if (p.tipo === 'brinde') {
    el.innerHTML = `<span class="promo-main">${p.texto}</span><span class="promo-sub">${p.detalhe}</span>`;
  }
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const promo = CONFIG.promocao;
  const emPromo = (id) => promo?.ativa && (promo.tipo === 'todos' || promo.servicos.includes(id));
  const calcPreco = (preco) => Math.round(preco * (1 - promo.porcentagem / 100));
  grid.innerHTML = CONFIG.servicos.map((s, i) => {
    const emPromocao = emPromo(s.id);
    let badge = '';
    if (emPromocao && promo.tipo === 'desconto') {
      badge = `<span class="servico-promo">-${promo.porcentagem}%</span>`;
    } else if (emPromocao && (promo.tipo === 'escassez' || promo.tipo === 'brinde')) {
      badge = `<span class="servico-promo">${promo.texto}</span>`;
    }
    let precoHtml = `<span class="service-price">R$ ${s.preco}</span>`;
    if (emPromocao && promo.tipo === 'desconto') {
      precoHtml = `<span class="service-price"><span class="price-original">R$ ${s.preco}</span> R$ ${calcPreco(s.preco)}</span>`;
    }
    return `
    <div class="service-card${emPromocao ? ' em-promocao' : ''}" data-delay="${i * 0.1}">
      ${badge}
      ${s.destaque ? `<span class="servico-destaque">${s.destaque}</span>` : ''}
      <div class="service-icon"><i class="fas ${s.icon}"></i></div>
      <h3>${s.nome}</h3>
      <p>${s.desc}</p>
      ${precoHtml}
      <div style="display:flex;gap:0.5rem">
        <button class="btn btn-outline btn-detalhes" data-servico-id="${s.id}" style="flex:1">
          <i class="fas fa-info-circle"></i> Detalhes
        </button>
        <button class="btn btn-primary btn-contratar" data-servico-id="${s.id}" style="flex:1">
          <i class="fas fa-shopping-cart"></i> Orçamento
        </button>
      </div>
    </div>
  `}).join('');
}

function renderAuthority() {
  const grid = document.getElementById('autoridadeGrid');
  if (!grid || !CONFIG.autoridade) return;
  grid.innerHTML = CONFIG.autoridade.map((a, i) => `
    <div class="autoridade-card" data-delay="${i * 0.15}">
      <div class="autoridade-card-icon" style="background:${a.cor}">
        <i class="${a.icon}"></i>
      </div>
      <h3>${a.titulo}</h3>
      <p>${a.desc}</p>
      <a href="${a.link}" target="_blank" class="autoridade-card-link">
        ${a.linkText} <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `).join('');
}

function renderAbout() {
  const story = document.getElementById('aboutStory');
  const cards = document.getElementById('aboutCards');
  if (!story || !cards || !CONFIG.about) return;

  story.textContent = CONFIG.about.story;

  const mission = document.getElementById('aboutMissionText');
  const philosophy = document.getElementById('aboutPhilosophyText');
  if (mission && CONFIG.about.mission) mission.textContent = CONFIG.about.mission;
  if (philosophy && CONFIG.about.workPhilosophy) philosophy.textContent = CONFIG.about.workPhilosophy;

  const team = CONFIG.about.team || CONFIG.about.founders || [];
  cards.innerHTML = team.filter(m => m.name).map((f, i) => `
    <div class="about-card" data-delay="${i * 0.2}">
      <div class="about-avatar"${f.avatar ? ` style="background-image:url(${f.avatar});background-size:cover;background-position:center"` : ''}>${f.avatar ? '' : f.name.charAt(0)}</div>
      <h3>${f.name}</h3>
      ${f.role ? `<span class="about-role">${f.role}</span>` : ''}
      ${f.bio ? `<p>${f.bio}</p>` : ''}
      <div class="about-social">
        ${f.social?.github ? `<a href="${f.social.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>` : ''}
        ${f.social?.youtube ? `<a href="${f.social.youtube}" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>` : ''}
        ${f.social?.discord ? `<a href="https://discord.com/users/${f.social.discord}" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a>` : ''}
      </div>
      ${f.portfolioUrl ? `<a href="${f.portfolioUrl}" target="_blank" class="about-portfolio"><i class="fas fa-briefcase"></i> Portfólio</a>` : ''}
    </div>
  `).join('');
}

function renderWorkProcess() {
  const container = document.getElementById('workProcess');
  if (!container || !CONFIG.workProcess) return;
  container.innerHTML = CONFIG.workProcess.map((w, i) => `
    <div class="wp-item" data-delay="${i * 0.1}">
      <div class="wp-item-icon"><i class="fas ${w.icon}"></i></div>
      <h3>${w.titulo}</h3>
      <p>${w.desc}</p>
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
        ${p.imagem ? `<img src="${p.imagem}" alt="${p.nome}" class="portfolio-img" loading="lazy">` : `<span class="portfolio-initial">${p.nome.charAt(0)}</span>`}
        <span class="portfolio-cat">${p.categoria}</span>
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
  grid.querySelectorAll('.portfolio-card').forEach((card, i) => {
    card.dataset.index = i;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => showPortfolioDetail(i));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showPortfolioDetail(i);
      }
    });
  });
}

function showPortfolioDetail(index) {
  const p = CONFIG.portfolio[index];
  if (!p) return;
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = p.nome;

  body.innerHTML = `
    <div class="portfolio-detail-header" style="background:linear-gradient(135deg, ${p.cor}, ${p.cor}88)">
      <i class="fas fa-server"></i>
      <span>${p.desc}</span>
    </div>
    ${p.desafio ? `
    <div class="detail-section">
      <h4><i class="fas fa-triangle-exclamation"></i> Desafio</h4>
      <p>${p.desafio}</p>
    </div>` : ''}
    ${p.solucao ? `
    <div class="detail-section">
      <h4><i class="fas fa-wrench"></i> Solução</h4>
      <p>${p.solucao}</p>
    </div>` : ''}
    ${p.tecnologias?.length ? `
    <div class="detail-section">
      <h4><i class="fas fa-code"></i> Tecnologias</h4>
      <div class="portfolio-tags" style="margin-top:0.5rem">
        ${p.tecnologias.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}
      </div>
    </div>` : ''}
  `;

  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCloseDetail">Fechar</button>
    <button class="btn btn-primary" data-action="contratar-portfolio">
      <i class="fas fa-shopping-cart"></i> Solicitar Orçamento
    </button>
  `;

  overlay.classList.add('show');

  document.getElementById('modalCloseDetail').addEventListener('click', fecharModal);
  footer.querySelector('[data-action="contratar-portfolio"]').addEventListener('click', () => {
    fecharModal();
    setTimeout(() => showContratarModal(p), 300);
  });
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
          <span class="testimonial-discord">${t.server ? t.server + (t.role ? ' · ' + t.role : '') : 'Discord: @' + t.discord}</span>
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
      <button class="faq-question" aria-expanded="false">
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
    '<a href="https://baccanadev.substack.com" target="_blank" class="blog-substack-link"><i class="fas fa-external-link-alt"></i> Ver todos no Substack</a>';
    observeCards();
  };

  const validos = CONFIG.artigos?.filter(a => a.url || a.arquivo) || [];

  // Rotaciona artigos a cada 72h
  const rotationKey = 'blogRotation';
  const stored = localStorage.getItem(rotationKey);
  let picked;
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const age = Date.now() - parsed.time;
      if (age < 72 * 60 * 60 * 1000 && Array.isArray(parsed.ids)) {
        picked = parsed.ids.map(i => validos[i]).filter(Boolean);
      }
    } catch {}
  }
  if (!picked || picked.length < 3) {
    const shuffled = [...validos].sort(() => Math.random() - 0.5);
    picked = shuffled.slice(0, 3);
    const ids = picked.map(p => validos.indexOf(p));
    localStorage.setItem(rotationKey, JSON.stringify({ time: Date.now(), ids }));
  }
  renderCards(picked, '');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  fetch('https://baccanadev.substack.com/api/v1/posts?limit=3', { signal: controller.signal })
    .then(r => { clearTimeout(timeout); return r.ok ? r.json() : Promise.reject(); })
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
    .catch(() => {});
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

  document.querySelectorAll('.service-card, .testimonial-card, .faq-item, .portfolio-card, .feature-card, .blog-card, .comparar-table, .about-card, .about-story, .about-mission-card, .autoridade-card, .wp-item').forEach(el => {
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
        body.innerHTML = '<p>Não foi possível carregar o artigo. <a href="' + (a.url || '#') + '" target="_blank">Abrir no Substack</a></p>';
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
      { name: "Contato", value: discord },
      { name: "Mensagem", value: msg }
    ]);

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Solicitar Orçamento';

    if (ok) {
      notify("Enviado com sucesso! Respondemos em breve.", "success");
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
    const isOpen = panel.classList.toggle('show');
    toggle.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', isOpen);
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
          showContratarModal(servico);
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

async function enviarWebhook(titulo, campos) {
  if (!CONFIG.webhook) return false;

  const agora = Date.now();
  if (agora - lastWebhookTime < CONFIG.rateLimit) {
    const restante = Math.ceil((CONFIG.rateLimit - (agora - lastWebhookTime)) / 1000);
    notify(`Aguarde ${restante}s para enviar nova mensagem`, 'error');
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

function showContratarModal(servico) {
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  const isPortfolio = !servico.id;
  title.textContent = isPortfolio ? `Orçamento: ${servico.nome}` : `Contratar: ${servico.nome}`;

  body.innerHTML = `
    <div class="modal-info">
      ${!isPortfolio ? `<span class="modal-price">R$ ${servico.preco}</span>` : ''}
      <p>${servico.desc}</p>
    </div>
    <div class="form-group">
      <label>Seu nome <span style="color:var(--error)">*</span></label>
      <input type="text" id="modalNome" name="nome" placeholder="Digite seu nome" required>
    </div>
    <div class="form-group">
      <label>Como prefere ser contactado? <span style="color:var(--error)">*</span></label>
      <div class="contact-options">
        <label class="contact-option">
          <input type="radio" name="contactMethod" value="discord" checked>
          <i class="fab fa-discord"></i> Discord
        </label>
        <label class="contact-option">
          <input type="radio" name="contactMethod" value="whatsapp">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </label>
        <label class="contact-option">
          <input type="radio" name="contactMethod" value="email">
          <i class="fas fa-envelope"></i> Email
        </label>
      </div>
    </div>
    <div class="form-group" id="contactInputGroup">
      <label id="contactInputLabel">Seu Discord</label>
      <input type="text" id="modalContact" name="contato" placeholder="Ex: usuario" required>
    </div>
    <div class="form-group">
      <label>Descrição do projeto <span style="color:var(--text-muted);font-weight:400">(opcional)</span></label>
      <textarea id="modalDesc" name="descricao" rows="3" placeholder="Conte um pouco sobre o que precisa..."></textarea>
    </div>
  `;

  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCancel">Cancelar</button>
    <button class="btn btn-primary" id="modalConfirm">
      <i class="fas fa-paper-plane"></i> Solicitar Orçamento
    </button>
  `;

  overlay.classList.add('show');

  document.getElementById('modalNome').focus();

  document.querySelectorAll('input[name="contactMethod"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const label = document.getElementById('contactInputLabel');
      const input = document.getElementById('modalContact');
      const val = document.querySelector('input[name="contactMethod"]:checked').value;
      if (val === 'discord') {
        label.textContent = 'Seu Discord';
        input.placeholder = 'Ex: usuario';
      } else if (val === 'whatsapp') {
        label.textContent = 'Seu WhatsApp';
        input.placeholder = '(11) 99999-9999';
      } else {
        label.textContent = 'Seu Email';
        input.placeholder = 'exemplo@email.com';
      }
    });
  });

  document.getElementById('modalCancel').addEventListener('click', fecharModal);

  document.getElementById('modalConfirm').addEventListener('click', async () => {
    if (submitting) return;
    const nome = sanitizeInput(document.getElementById('modalNome').value.trim());
    const contato = sanitizeInput(document.getElementById('modalContact').value.trim());
    const metodo = document.querySelector('input[name="contactMethod"]:checked')?.value;
    if (!nome || !contato || !metodo) {
      notify('Preencha seu nome e um contato', 'error');
      return;
    }
    const preco = servico.preco;
    submitting = true;
    document.getElementById('modalConfirm').disabled = true;
    await contratar(servico, preco, nome, contato, metodo);
    fecharModal();
    submitting = false;
  });
}

async function contratar(servico, preco, nome, contato, metodo) {
  const descInput = document.getElementById('modalDesc');
  const desc = descInput ? sanitizeInput(descInput.value.trim()) : '';
  const fields = [
    { name: "Cliente", value: nome },
    { name: "Contato", value: `[${metodo.toUpperCase()}] ${contato}` },
    { name: "Serviço", value: servico.nome },
    { name: "Valor", value: preco ? "R$ " + preco : "A combinar" }
  ];
  if (desc) fields.push({ name: "Descrição", value: desc });
  const webhookOk = await enviarWebhook("Novo pedido!", fields);

  if (webhookOk) {
    notify("Pedido enviado com sucesso!", "success");
    if (metodo === 'discord') {
      setTimeout(() => window.open(CONFIG.discord, '_blank'), 1000);
    }
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
      <label>Como prefere ser contactado?</label>
      <div class="contact-options">
        <label class="contact-option">
          <input type="radio" name="quickContact" value="discord" checked>
          <i class="fab fa-discord"></i> Discord
        </label>
        <label class="contact-option">
          <input type="radio" name="quickContact" value="whatsapp">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </label>
        <label class="contact-option">
          <input type="radio" name="quickContact" value="email">
          <i class="fas fa-envelope"></i> Email
        </label>
      </div>
    </div>
    <div class="form-group" id="quickContactGroup">
      <label id="quickContactLabel">Seu Discord</label>
      <input type="text" id="quickContactInput" name="contato" placeholder="Ex: usuario" required>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn btn-outline" id="modalCancel">Cancelar</button>
    <button class="btn btn-primary" id="modalConfirm">
      <i class="fas fa-paper-plane"></i> Enviar
    </button>
  `;

  overlay.classList.add('show');

  document.querySelectorAll('input[name="quickContact"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const label = document.getElementById('quickContactLabel');
      const input = document.getElementById('quickContactInput');
      const val = document.querySelector('input[name="quickContact"]:checked').value;
      if (val === 'discord') { label.textContent = 'Seu Discord'; input.placeholder = 'Ex: usuario'; }
      else if (val === 'whatsapp') { label.textContent = 'Seu WhatsApp'; input.placeholder = '(11) 99999-9999'; }
      else { label.textContent = 'Seu Email'; input.placeholder = 'exemplo@email.com'; }
    });
  });

  document.getElementById('modalCancel').addEventListener('click', fecharModal);

  document.getElementById('modalConfirm').addEventListener('click', async () => {
    if (submitting) return;
    const contato = sanitizeInput(document.getElementById('quickContactInput').value.trim());
    const metodo = document.querySelector('input[name="quickContact"]:checked')?.value;
    if (!contato || !metodo) {
      notify('Informe um contato', 'error');
      return;
    }
    submitting = true;
    document.getElementById('modalConfirm').disabled = true;

    const ok = await enviarWebhook(`Quick: ${tipo}`, [
      { name: "Contato", value: `[${metodo.toUpperCase()}] ${contato}` },
      { name: "Mensagem", value: msgs[tipo] }
    ]);

    submitting = false;
    if (ok) {
      notify("Mensagem enviada!", "success");
      if (metodo === 'discord') {
        setTimeout(() => window.open(CONFIG.discord, '_blank'), 1000);
      }
    }
    fecharModal();

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
    })
    .catch(() => {});
}

function initFAQ() {
  document.addEventListener('click', e => {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    if (!item) return;
    const isOpen = item.classList.toggle('open');
    question.setAttribute('aria-expanded', isOpen);
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

function initTermos() {
  const toggle = document.getElementById('termosToggle');
  const box = toggle?.closest('.termos-box');
  if (!toggle || !box) return;
  toggle.addEventListener('click', () => {
    box.classList.toggle('open');
    toggle.setAttribute('aria-expanded', box.classList.contains('open'));
  });
}
