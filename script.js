/* BACCANAS DEV */
/* GitHub: nz12two/baccanasHUB */

document.addEventListener('DOMContentLoaded', initAll);

function initAll() {
  renderServices();
  renderPlans();
  renderRoadmap();
  renderFooter();
  animateStats();
  initScrollAnimations();
  initScrollEffects();
  initContato();
  initMenu();
  initWidget();
}

// Renderizações
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  
  grid.innerHTML = CONFIG.servicos.map((s, i) => `
    <div class="service-card" data-delay="${i * 0.1}">
      <div class="service-icon"><i class="fas ${s.icon}"></i></div>
      <h3>${s.nome}</h3>
      <p>${s.desc}</p>
      <span class="service-price">R$ ${s.preco}</span>
      <button class="btn btn-primary" onclick="contratar('${s.id}', ${s.preco})">
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
      <button class="btn btn-primary" onclick="contratar('${p.id}', ${p.preco})">
        <i class="fas fa-shopping-cart"></i> Contratar
      </button>
    </div>
  `).join('');
}

function renderRoadmap() {
  const container = document.getElementById('roadmapContainer');
  if (!container) return;
  
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
  container.innerHTML = CONFIG.roadmap.map((r, i) => {
    const data = new Date(r.data);
    return `
      <div class="roadmap-item" data-delay="${i * 0.1}">
        <div class="roadmap-header">
          <span class="roadmap-month">${meses[data.getMonth()]}</span>
          <span class="roadmap-day">${data.getDate()}</span>
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

function renderFooter() {
  const discordLinks = document.querySelectorAll('a[href*="discord"]');
  discordLinks.forEach(el => {
    if (el.href.includes('#')) return;
    el.href = CONFIG.discord;
  });
}

// Animações
function animateStats() {
  const s = document.getElementById('statServers');
  const c = document.getElementById('statClients');
  if (!s || !c) return;
  
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

function initScrollAnimations() {
  // Cards renderizados dinamicamente
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
  
  document.querySelectorAll('.service-card, .plan-card, .roadmap-item').forEach(el => {
    observer.observe(el);
  });
  
  // Features são estáticas no HTML - usar CSS animation-delay
  document.querySelectorAll('.feature-card').forEach((el, i) => {
    el.style.animationDelay = (i * 0.15) + 's';
    el.classList.add('animate-in');
  });
}

function initScrollEffects() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Interações
async function contratar(servicoId, preco) {
  const servico = CONFIG.servicos.find(s => s.id === servicoId);
  if (!servico) return;
  
  const nome = prompt("Seu nome:");
  if (!nome) return;
  
  const discord = prompt("Seu Discord:");
  if (!discord) return;
  
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
  
  try {
    await fetch(CONFIG.webhook, {
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
  } catch (e) { console.error(e); }
}

function notify(msg, tipo = "info") {
  const cores = { success: "#10b981", error: "#ef4444", info: "#6366f1" };
  const icons = { success: "check-circle", error: "times-circle", info: "info-circle" };
  
  const div = document.createElement('div');
  div.className = `toast toast-${tipo}`;
  div.style.cssText = `
    position: fixed; bottom: 1.5rem; right: 1.5rem; padding: 0.9rem 1.5rem;
    border-radius: 10px; z-index: 10000; animation: fadeIn 0.3s ease;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5); display: flex; align-items: center;
    gap: 0.5rem; color: white; font-weight: 500; background: ${cores[tipo]};
  `;
  div.innerHTML = `<i class="fas fa-${icons[tipo]}"></i> ${msg}`;
  document.body.appendChild(div);
  
  setTimeout(() => {
    div.style.opacity = "0";
    div.style.transform = "translateY(20px)";
    setTimeout(() => div.remove(), 300);
  }, 3000);
}

function initContato() {
  document.getElementById('contactForm')?.addEventListener('submit', async e => {
    e.preventDefault();
    await enviarWebhook("Nova mensagem!", [
      { name: "Nome", value: document.getElementById('name').value },
      { name: "Discord", value: document.getElementById('discordId').value },
      { name: "Mensagem", value: document.getElementById('message').value }
    ]);
    notify("Enviado!", "success");
    e.target.reset();
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

function initWidget() {
  const toggle = document.getElementById('widgetToggle');
  const panel = document.getElementById('widgetPanel');
  if (!toggle || !panel) return;
  
  toggle.addEventListener('click', () => {
    panel.classList.toggle('show');
    toggle.style.display = panel.classList.contains('show') ? 'none' : 'flex';
  });
  
  document.querySelector('.widget-close')?.addEventListener('click', () => {
    panel.classList.remove('show');
    toggle.style.display = 'flex';
  });
}

function quickReply(tipo) {
  const msgs = {
    orcamento: "Olá! Gostaria de fazer um orçamento.",
    duvida: "Olá! Tenho uma dúvida sobre os serviços.",
    urgente: "Olá! Preciso de atendimento urgente!"
  };
  
  const discord = prompt("Seu Discord:");
  if (!discord) return;
  
  enviarWebhook(`Quick: ${tipo}`, [
    { name: "Discord", value: discord },
    { name: "Mensagem", value: msgs[tipo] }
  ]);
  
  notify("Mensagem enviada!", "success");
  setTimeout(() => window.open(CONFIG.discord, '_blank'), 1000);
  
  document.getElementById('widgetPanel')?.classList.remove('show');
  document.getElementById('widgetToggle').style.display = 'flex';
}

window.contratar = contratar;
window.quickReply = quickReply;