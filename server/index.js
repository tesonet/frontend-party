const bodyParser = require('body-parser');
const express = require('express');
const { default: axios } = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/api*', (req, res, next) => {
  const { url, method, body } = req;
  const baseURL = "http://playground.tesonet.lt/v1";
  const trimmedUrl = url.replace('/api', '');
  const proxySummary = `${method} ${url} --> ${method} ${baseURL + trimmedUrl}`

  console.log(`(PROXY REQUEST) ${proxySummary}`);

  axios({ 
      url: trimmedUrl,
      data: body,
      baseURL,
      method,
      validateStatus: () => true // All status codes handled as resolved promise
    })
    .then(({data, status}) => {
      console.log(`(PROXY SUCCESS) ${proxySummary}`);
      res.status(status).json(data)
    })
    .catch(err => {
      console.log(`(PROXY FAILED) ${proxySummary}`);
      res.status(500).json("Something unexpected happened ¯\\_(ツ)_/¯");
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})