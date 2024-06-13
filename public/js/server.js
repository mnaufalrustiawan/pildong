const http = require('http');
const fs = require('fs');
const path = require('path');

// Fungsi untuk menyajikan file statis
function serveFile(res, filePath, contentType, responseCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// Membuat server
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        serveFile(res, './index.html', 'text/html');
    } else if (url === '/styles.css' && method === 'GET') {
        serveFile(res, './styles.css', 'text/css');
    } else if (url === '/scripts.js' && method === 'GET') {
        serveFile(res, './scripts.js', 'application/javascript');
    } else if (url === '/submit' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Data received:', body);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});

// Menjalankan server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
