//Documentation https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'API_EXPRESS',
      script: './src/index.js',
      exec_mode: 'cluster',
      instances: 'max',
      max_restarts: 10,
      max_memory_restart: '8G',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },

    {
      name: 'API_EXPRESS_HEALTH',
      script: './src/index.health.js',
      exec_mode: 'cluster',
      instances: '1',
      max_memory_restart: '500M',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
