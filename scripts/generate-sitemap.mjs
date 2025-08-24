import { promises as fs } from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const DOMAIN = 'https://www.martircontabil.com.br';
const today = new Date().toISOString().slice(0, 10);
const cwd = process.cwd();

const staticRoutes = [
  '/',
  '/contato',
  '/sobre',
  '/servicos',
  '/servicos/abertura-de-empresas',
  '/servicos/certificado-digital',
  '/servicos/consultoria-contabil',
  '/servicos/contabilidade-mensal',
  '/servicos/imposto-de-renda',
  '/servicos/planejamento-tributario',
  '/blog'
];

async function loadPosts() {
  const file = path.join(cwd, 'src', 'Blog', 'posts.js');

  try {
    const mod = await import(pathToFileURL(file).href);
    const data = mod.default || [];
    return data
      .filter((p) => p?.slug)
      .map((p) => ({
        loc: `${DOMAIN}/blog/${p.slug}`,
        lastmod: (p.updatedAt || today).slice(0, 10)
      }));
  } catch {
    return [];
  }
}

function toXml(urls) {
  const items = urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

async function run() {
  const staticUrls = staticRoutes.map((r) => ({ loc: `${DOMAIN}${r}`, lastmod: today }));
  const postUrls = await loadPosts();
  const xml = toXml([...staticUrls, ...postUrls]);

  const outDir = path.join(cwd, 'public');
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`OK: sitemap.xml com ${staticUrls.length + postUrls.length} URLs`);
}
run();
