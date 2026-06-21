const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const root = __dirname;

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  let filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);

  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  else if (ext === '.svg') contentType = 'image/svg+xml';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
