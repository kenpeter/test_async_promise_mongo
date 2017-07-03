// mongo client
import { MongoClient } from 'mongodb';
// es6 promise
import promisify from 'es6-promisify';

// let local connect
let _connection;

// connect fat arrow
const connect = () => {
  const mongoConnectStr = 'mongodb://nodejs_jwt:nodejs_jwt@localhost:27017/nodejs_jwt';
  return promisify(MongoClient.connect)(mongoConnectStr);
};

/**
 * Returns a promise of a `db` object. Subsequent calls to this function returns
 * the **same** promise, so it can be called any number of times without setting
 * up a new connection every time.
 */
// connection, fat arrow
const connection = () => {
  // if _conn, not set
  if (!_connection) {
    // return promise, mongo_connect
    _connection = connect();
  }

  // return _conn
  return _connection;
};

// now export
export default connection;

/**
 * Returns a ready-to-use `collection` object from MongoDB.
 *
 * Usage:
 *
 *   (await getCollection('users')).find().toArray().then( ... )
 */
// export async func has await
export async function getCollection(collectionName) {
  // pass in table name
  // wait for connection
  const db = await connection();
  // return db collection....
  return db.collection(collectionName);
}
