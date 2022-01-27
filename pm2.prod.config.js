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
			out_file: './logs/pm2/API_EXPRESS_out.log',
			error_file: './logs/pm2/API_EXPRESS_err.log',
			merge_logs: true,
			restart_delay: 1000,
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
			out_file: './logs/pm2/API_EXPRESS_HEALTH_out.log',
			error_file: './logs/pm2/API_EXPRESS_HEALTH_out.log',
			merge_logs: true,
			restart_delay: 1000,
			env: {
				NODE_ENV: 'production',
				IP: '127.0.0.1',
				PORT: 3001,
			},
		},
	],
};
