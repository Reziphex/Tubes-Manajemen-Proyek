// Server lokal opsional. Situs juga dapat dibuka langsung melalui index.html.
import http from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {dirname, resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const value = key => argv[argv.indexOf(key) + 1];
const host = argv.includes('--host') ? value('--host') : '127.0.0.1';
const port = Number(argv.includes('--port') ? value('--port') : 3000);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.md':'text/plain; charset=utf-8','.json':'application/json; charset=utf-8'};
const server = http.createServer(async (req, res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405); res.end('Method not allowed'); return;}
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let target = resolve(root, '.' + pathname);
    if (target !== root && !target.startsWith(root + sep)) {res.writeHead(403);res.end('Forbidden');return;}
    if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
    const file = await readFile(target);
    res.writeHead(200, {'Content-Type':mime[extname(target)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(req.method === 'HEAD' ? undefined : file);
  } catch {res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});res.end('File tidak ditemukan.');}
});
server.on('error', err => {console.error('Server tidak dapat dimulai:', err.message);process.exit(1);});
server.listen(port, host, () => console.log(`PAB-1 siap dibuka: http://${host}:${port}`));
