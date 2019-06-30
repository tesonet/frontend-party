import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 5000;
const pathname = path.resolve(`${__dirname}/../client`);

// console.log({ pathname });

const start = (pid) => {
  const app = express();
  app.use('/', express.static(pathname));
  app.listen(PORT, () => console.log(`listening pid: [${pid}] on port: ${PORT}`));
};

if (!module.parent) start(process.pid);

export default { start };