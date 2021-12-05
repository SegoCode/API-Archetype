//Documentation https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'API_EXPRESS_DEV',
      script: './src/index.js',
      watch: true,
      restart_delay: 5000,
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'development',
        PORT: 80,
      },
    },

    {
      name: 'API_EXPRESS_DEV_HEALTH',
      script: './src/index.health.js',
      watch: true,
      restart_delay: 5000,
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'development',
        PORT: 81,
      },
    },
  ],
};
