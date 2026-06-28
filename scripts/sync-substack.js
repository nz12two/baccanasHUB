const fs = require('fs');
const path = require('path');

const CONFIG_PATH = 'config.js';
const ARTIGOS_DIR = 'artigos';
const API_URL = 'https://baccanadev.substack.com/api/v1/posts?limit=20';

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapIcon(cat) {
  const c = (cat || '').toLowerCase();
  if (c.includes('tutorial')) return 'fa-book';
  if (c.includes('plugin')) return 'fa-plug';
  if (c.includes('otim')) return 'fa-tachometer-alt';
  if (c.includes('bot')) return 'fa-robot';
  if (c.includes('geopol')) return 'fa-earth-americas';
  if (c.includes('map')) return 'fa-map';
  if (c.includes('score')) return 'fa-table';
  if (c.includes('config') || c.includes('properties')) return 'fa-cog';
  if (c.includes('server')) return 'fa-server';
  if (c.includes('bedrock')) return 'fa-users';
  return 'fa-cube';
}

function cleanBody(html) {
  return html
    .replace(/<div class="image-link-expand">.*?<\/div>\s*<\/div>\s*<\/div>/gs, '</div></div>')
    .replace(/<button[^>]*>.*?<\/button>/gs, '')
    .replace(/<div class="captioned-image-container">\s*<figure>\s*<a class="image-link[^"]*"[^>]*>\s*<\/a>\s*<\/figure>\s*<\/div>/gs, '');
}

async function main() {
  console.log(`Lendo ${CONFIG_PATH} ...`);
  let configContent = fs.readFileSync(CONFIG_PATH, 'utf-8');

  // Extract existing URLs
  const existingUrls = new Set();
  const urlRegex = /url:\s*"([^"]+)"/g;
  let match;
  while ((match = urlRegex.exec(configContent)) !== null) {
    existingUrls.add(match[1]);
  }
  console.log(`Artigos existentes no config: ${existingUrls.size}`);

  // Fetch Substack API
  console.log(`Buscando artigos do Substack ...`);
  let posts;
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    posts = await res.json();
  } catch (err) {
    console.error(`ERRO: Nao foi possivel acessar a API: ${err.message}`);
    process.exit(1);
  }

  console.log(`Total de artigos no Substack: ${posts.length}`);

  const novos = [];
  for (const post of posts) {
    const url = post.canonical_url;
    if (existingUrls.has(url)) {
      console.log(`  JA EXISTE: ${post.title}`);
      continue;
    }

    const id = slugify(post.title);
    const titulo = post.title.replace(/[^\x20-\x7E\u00C0-\u00FF\u0100-\u024F]/g, '').trim();
    const desc = (post.description || '').substring(0, 200);
    const rawDate = post.post_date || post.published_date || '';
    const data = rawDate ? rawDate.substring(0, 10) : new Date().toISOString().substring(0, 10);
    const cat = (post.postTags && post.postTags[0]) ? post.postTags[0].name : 'Artigo';
    const icon = mapIcon(cat);
    const bodyClean = cleanBody(post.body || '');

    // Save HTML file
    if (!fs.existsSync(ARTIGOS_DIR)) fs.mkdirSync(ARTIGOS_DIR, { recursive: true });
    const htmlPath = path.join(ARTIGOS_DIR, `${id}.html`);
    fs.writeFileSync(htmlPath, bodyClean, 'utf-8');
    console.log(`  SALVO: ${htmlPath} (${bodyClean.length} chars)`);

    novos.push({ id, icon, titulo, resumo: desc, categoria: cat, data, url, arquivo: `artigos/${id}.html` });
  }

  if (novos.length === 0) {
    console.log('Nenhum artigo novo encontrado.');
    return;
  }

  console.log(`\n${novos.length} novo(s) artigo(s). Atualizando config.js ...`);

  // Build new entries string
  let newEntries = '';
  for (const n of novos) {
    newEntries += `\n    {\n`;
    newEntries += `      id: "${n.id}",\n`;
    newEntries += `      icon: "${n.icon}",\n`;
    newEntries += `      titulo: "${n.titulo}",\n`;
    newEntries += `      resumo: "${n.resumo}",\n`;
    newEntries += `      categoria: "${n.categoria}",\n`;
    newEntries += `      data: "${n.data}",\n`;
    newEntries += `      url: "${n.url}",\n`;
    newEntries += `      arquivo: "${n.arquivo}"\n`;
    newEntries += `    },`;
  }

  // Inject new entries at the start of the artigos array
  const artigosMatch = configContent.match(/(\s+artigos:\s*\[)([\s\S]*?)(\n\s+\])/);
  if (!artigosMatch) {
    console.error('ERRO: Nao foi possivel encontrar o array artigos: em config.js');
    process.exit(1);
  }

  const idx = artigosMatch.index;
  const before = configContent.slice(0, idx + artigosMatch[1].length);
  const after = configContent.slice(idx + artigosMatch[1].length + artigosMatch[2].length + artigosMatch[3].length);
  const newConfig = before + newEntries + '\n' + artigosMatch[2].trimStart() + after;

  fs.writeFileSync(CONFIG_PATH, newConfig, 'utf-8');
  console.log(`\nFeito! ${novos.length} artigo(s) adicionado(s) ao config.js como destaque.`);
}

main().catch(err => { console.error(err); process.exit(1); });
