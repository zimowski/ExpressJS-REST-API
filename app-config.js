export default {
  general: {
    public_path: 'public',
    port: 3000,
    cors: {
      enabled: true,
      domains: [
        'http://localhost:4200'
      ],
      preflightContinue: true
    }
  },
  db: {
    mysql: {
      enabled: true,
      hostname: 'localhost',
      database: 'rest_api',
      username: 'root',
      password: '',
      prefix: 'api_',
      multipleStatements: true
    }
  },
  token: {
    key: 'q>JN`-Yd3}RA?$:O.M6EaDZKi>P}QGo>Z^Kc46j%}fZd@Y~P>;A2XTAu{-xK6{E',
    expiresIn: '24 hours'
  }
};
