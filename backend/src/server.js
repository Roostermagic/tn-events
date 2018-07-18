const Path = require('path');

const Hapi = require('hapi');
const inert = require('inert');

const server = Hapi.server({
  port: process.env.NODE_ENV === 'production' ? process.env.PORT : 3000,
  host: '0.0.0.0',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../../frontend/build')
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => h.file('index.html')
});

const init = async () => {
  await server.register(inert);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
