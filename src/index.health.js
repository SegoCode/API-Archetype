const http = require('http');
const port = process.env.PORT;
const ip = process.env.IP;

const conf = {
	hostname: ip,
	port: port - 1,
	path: '/api/',
	method: 'GET',
};

http
	.createServer(function (req, res) {
		if (req.url === '/health') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			externalRequest = http.request(conf, (externalResponse) => {
				res.write(
					JSON.stringify({
						code: externalResponse.statusCode,
						status: 'Online',
						date: new Date(),
					}),
				);
				res.end();
			});

			externalRequest.on('error', (error) => {
				res.write(
					JSON.stringify({
						code: error.code,
						status: 'Offline',
						date: new Date(),
					}),
				);
				res.end();
			});

			externalRequest.end();
		} else {
			res.writeHead(301, { Location: 'health' });
			res.end();
		}
	})
	.listen(port);
