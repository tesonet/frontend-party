const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

const { log } = console;
const { env } = process;

const API_PORT = env.PORT || 3000;

app.use(helmet());

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(API_PORT, () => {
    log(`listening on port ${API_PORT}!`);
});
