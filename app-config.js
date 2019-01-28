export default {
  'general': {
    'public_path': 'public',
    'port': 3000,
    'allow_domains': [
      'http://localhost:4200'
    ]
  },
  'mysql' : {
    'hostname': 'localhost',
    'database': 'rest_api',
    'username': 'root',
    'password': '',
    'table_prefix': 'api_'
  },
  'token': {
    'private_key': 'q>JN`-Yd3}RA?$:O.M6EaDZKi>P}QGo>Z^Kc46j%}fZd@Y~P>;A2XTAu{-xK6{E',
    'expires_in': '24 hours'
  }
};
