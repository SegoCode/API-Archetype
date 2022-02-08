//Documentation https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'API_EXPRESS_DEV',
      script: './src/index.js',
      watch: true,
      restart_delay: 5000,
      out_file: './logs/API_EXPRESS_out.log',
      error_file: './logs/API_EXPRESS_err.log',
      env: {
        NODE_ENV: 'development',
        PORT: 80,
        JWT_KEY: 'your-256-bit-secret'
      },
    },

    {
      name: 'API_EXPRESS_DEV_HEALTH',
      script: './src/index.health.js',
      watch: true,
      restart_delay: 5000,
      out_file: './logs/API_EXPRESS_HEALTH_out.log',
      error_file: './logs/API_EXPRESS_HEALTH_err.log',
      env: {
        NODE_ENV: 'development',
        IP: '127.0.0.1',
        PORT: 81,
        JWT_KEY: 'your-256-bit-secret'
      },
    },
  ],
};
