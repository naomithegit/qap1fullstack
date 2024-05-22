const http = require('http'); 

// Creating an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Setting response headers
  res.end('Hello World!\n'); // Sending response
});

server.listen(5000, '127.0.0.1'); // Listening on port 5000

console.log('Server running at http://127.0.0.1:5000/'); // Logging that the server is running