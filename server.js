import JsonServer from 'json-server';
const server = JsonServer.create();
const router = JsonServer.router('db.json');
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);