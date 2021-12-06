const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT;
const ip = process.env.IP;

const options = {
  hostname: ip,
  port: port - 1,
  path: '/api/',
  method: 'GET',
};

app.get('/health', (req, res) => {
  con = http.request(options, (externalResponse) => {
    res.send({
      code: externalResponse.statusCode,
      status: 'Online',
      date: new Date(),
    });
  });

  con.on('error', (error) => {
    res.send({
      code: error.code,
      status: 'Offline',
      date: new Date(),
    });
  });

  con.end();
});

app.use((req, res, next) => {
  res.redirect('/health');
});

app.listen(port);
