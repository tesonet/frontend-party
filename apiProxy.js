/*
 API proxy eliminates many possible compatibility issues,
 one of them being IE9 not setting headers on CORS requests:
 #3 @ https://blogs.msdn.microsoft.com/ieinternals/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds/
*/

const axios = require('axios');

const endpoint = 'http://playground.tesonet.lt/v1';

module.exports = (req, res) => {
  const params = {
    method: req.method,
    url: endpoint + req.originalUrl.replace(/^\/api/, ''),
    data: req.body,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (req.headers.authorization) {
    params.headers.authorization = req.headers.authorization;
  }
  axios(params).then((success) => {
    res.send(success.data);
  }, (error) => {
    res.status(error.response.status).send(error.response.data);
  });
};
