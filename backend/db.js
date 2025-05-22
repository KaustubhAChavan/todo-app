const { Client } = require('pg');

const client = new Client({
  user: 'mydotoapp_owner',
  host: 'ep-broad-block-a5zgvz8w-pooler.us-east-2.aws.neon.tech',
  database: 'mydotoapp',
  password: 'npg_sbCE2A7wHKxa',
  port: 5432,
  ssl: true, 
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database!'))
  .catch(err => console.error('Connection error:', err.stack));

module.exports = client;