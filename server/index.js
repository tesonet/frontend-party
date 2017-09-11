const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/api*', (req, res) => {
  const { url, method, body } = req;
  const baseURL = 'http://playground.tesonet.lt/v1';
  const trimmedUrl = url.replace('/api', '');

  axios({
      url: trimmedUrl,
      data: body,
      baseURL,
      method,
      headers: {
        Authorization: req.headers.authorization || '',
      },
      validateStatus: () => true, // All status codes handled as resolved promise
    })
    .then(({ data, status }) => {
      res.status(status).json(data);
    })
    .catch(() => {
      res.status(500).json('Something unexpected happened ¯\\_(ツ)_/¯');
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
