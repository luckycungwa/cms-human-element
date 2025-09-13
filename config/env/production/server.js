module.exports = ({ env }) => ({
  url: env('URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
