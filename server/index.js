import path from 'path';
import express from 'express';
import helmet from 'helmet';

const PORT = process.env.PORT || 5000;
const pathname = path.resolve(`${__dirname}/../client`);

const start = (pid) => {
  const app = express();
  app.use(helmet());
  app.use('/', express.static(pathname));
  app.get('*', (req, res) => res.redirect('/'));
  app.listen(PORT, () => console.log(`listening pid: [${pid}] on port: ${PORT}`));
};

if (!module.parent) start(process.pid);

export default { start };