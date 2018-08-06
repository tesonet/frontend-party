import * as express from 'express';
import * as path from 'path';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const PUBLIC_PATH = path.resolve(__dirname, '../dist');

const app = express();

app.use(express.static(PUBLIC_PATH));

app.get('*', (_, res) => res.sendFile(path.resolve(PUBLIC_PATH, 'index.html')));

app.listen(PORT, HOST, () => {
  // tslint:disable-next-line:no-console
  console.log(`Started server at http://${HOST}:${PORT}`);
});
