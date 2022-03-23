export default {
  JWT_SECRET: process.env.AUTHENTICATION_SECRET || 'devsecret',
  PORT: process.env.PORT || 6060,
};
