const env = process.env.APP_ENV || 'development';

const config = {
  mongoUri: 'mongodb://root:root@localhost/app?authSource=admin',
  port: 3001,
  env,
};

module.exports = config;
