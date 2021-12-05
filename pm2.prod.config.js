//Documentation https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'API_REST_EXPRESS_PROD',
      script: './src/index.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
