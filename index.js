const jsonServer = require("json-server")// importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("mock.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i choose to use 3

server.use(middlewares);
server.use(router);
server.listen(port);