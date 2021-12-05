const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT;
const endpoint = 'http://127.0.0.1:' + (port - 1) + '/api/';

app.get('/health', (req, res) => {
  axios({
    method: 'get',
    url: endpoint,
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
