const express = require('express');
const app = express();

module.exports = app;

app.get('/', (req, res, next) => {
  res.send(`
    <html>
        <body>
            Bla Bla Bla
        </body>
    </html>
    `);
});
