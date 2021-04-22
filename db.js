const Sequelize = require('sequelize');
const { STRING } = Sequelize;

/*
if getting an error on heroku:

const config = {}

if(process.env.SSL){
    config.dialectOptions = {
        ssl: {
            refectUnauthorized: false
        }
    }
}
*/

const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgresql://localhost/acme_db',

  { logging: false } //add config if running into trouble
);

const Product = conn.define('product', {
  name: STRING,
});

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  await Product.create({ name: 'foo' });
  await Product.create({ name: 'bar' });
};

module.exports = {
  models: { Product },
  syncAndSeed,
};
