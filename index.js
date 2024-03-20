import http from 'http';

const SETTINGS = {
  port: 8000,
  host: '127.0.0.1',
};

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      res.getHeader('Content-Type', 'text/plain;');
      switch (req.url) {
        case '/hello':
          res.statusCode = 200;
          res.end('Hello world!');
          break;
        default:
          res.statusCode = 404;
          res.end('404 not found');
      }
    }
});

server.listen(
  SETTINGS,
  () => console.log(
    `Сервер успешно запущен на ${SETTINGS.host}:${SETTINGS.port} порте!`
  )
);
