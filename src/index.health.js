const express = require('express');
const axios = require('axios');
const app = express();
const port = 8021;

app.get('/health', (req, res) => {
  axios({
    method: 'get',
    url: 'http://localhost:8020/api/',
    timeout: 1000,
  })
    .then((response) => {
      res.send({
        code: response.status,
        status: 'Online',
        date: new Date(),
      });
    })
    .catch((err) => {
      res.send({
        code: err.code,
        status: 'Offline',
        date: new Date(),
      });
    });
});

app.use((req, res, next) => {
  res.redirect('/health');
});

app.listen(port);
