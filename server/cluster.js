import server from './';

const cluster = require('cluster');
const CPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < CPUs; i++) cluster.fork();

  cluster.on('exit', (worker) => {
    console.log(`[-]worker pid: [${worker.process.pid}] --exit`);
    cluster.fork();
  });
} else {
  console.log(`[+]worker pid: [${process.pid}] --start`);
  server.start(process.pid);
  console.log(`[+]worker pid: [${process.pid}] --up`);
}