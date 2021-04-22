const app = require('./app');

const port = process.env.PORT || 1813;

app.listen(port, () => console.log(`listening on port ${port}`));
