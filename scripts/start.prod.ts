import * as express from 'express';
import * as path from 'path';
import { PUBLIC_PATH } from '../webpack/webpack.config';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const DIST_PATH = path.resolve(__dirname, '../dist');

const app = express();

app.use(PUBLIC_PATH, express.static(DIST_PATH));

app.get('*', (_, res) => res.sendFile(path.resolve(DIST_PATH, 'index.html')));

app.listen(PORT, HOST, () => {
  // tslint:disable-next-line:no-console
  console.log(`Started server at http://${HOST}:${PORT}`);
});
