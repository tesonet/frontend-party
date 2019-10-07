type Config = typeof config;

const config = {
  apiUrl: process.env.API_URL || 'http://playground.tesonet.lt/v1',
  distanceUnits: process.env.DISTANCE_UNITS || 'km',
};

export { config, Config };
