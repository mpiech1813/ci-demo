const app = require('./app');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 1813;

const init = async () => {
  app.listen(port, () => console.log(`listening on port ${port}`));
  await syncAndSeed();
};

init();
