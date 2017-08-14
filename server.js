const fetch = require('node-fetch');
const url = require('url');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const baseUrl = 'http://playground.tesonet.lt/v1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/tokens', (req, res) => {
  const postData = {
    method: 'POST',
	  body: JSON.stringify(req.body),
	  headers: { 'Content-Type': 'application/json' }
  };

  fetch(`${baseUrl}/tokens`, postData)
    .then((response) => {
      return response.json();
    }).then((json) => {
      res.json(json);
    }).catch((err) => {
      res.json({ error: 'Something went wrong' });
    });
});

app.get('/servers', (req, res) => {
  const getData = {
    headers: {
      'authorization': req.headers.authorization
    }
  };

  fetch(`${baseUrl}/servers`, getData)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.json(json);
    })
    .catch((err) => {
      res.json({ error: 'Something went wrong' });
    });
});

app.listen(3001, () => {
  console.log('Find the server at: http://localhost:3001/');
});
