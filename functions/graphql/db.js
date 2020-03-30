require('dotenv').config();
const faunadb = require('faunadb');
const query = faunadb.query;
function createClient() {
  if (!process.env.FAUNA_POTTER_KEY) {
    throw new Error(
      `No FAUNA_POTTER_KEY in environment, skipping client creation`
    );
  }
  const client = new faunadb.Client({
    secret: process.env.FAUNA_POTTER_KEY
  });
  return client;
}
exports.client = createClient();
exports.query = query;