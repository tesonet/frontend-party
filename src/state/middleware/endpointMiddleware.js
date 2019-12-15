import createEndpointMiddleware from '@tshio/redux-api-endpoint-middleware';

const endpointMiddleware = createEndpointMiddleware({
  excluded: ['http://', 'https://'],
  apis: {
    default: {
      apiUrl: 'http://playground.tesonet.lt/v1',
    },
  },
});

export default endpointMiddleware;
