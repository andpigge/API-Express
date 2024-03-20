import express from 'express';

const SETTINGS = {
  host: 'http://localhost',
  port: 8000,
};

const app = express();

app.all('/*', (req, res, next) => {
  console.log('All');
  next();
});

const cb = (req, res, next) => {
  console.log('CB');
  next();
}

app.get('/hello', cb, (req, res) => {
  res.send('Привет!');
})

app.post('/hello', (req, res) => {
  res.send('Привет!');
});

app.listen(SETTINGS.port, () => console.log(
  `Сервер успешно запущен на ${SETTINGS.host}:${SETTINGS.port} порте!`
));
