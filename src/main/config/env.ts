export default {
  mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 3333,
  domain: process.env.DOMAIN || 'http://localhost',
};
