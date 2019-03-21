const Database = require('better-sqlite3');
const db = new Database('temp.db', { /*verbose: console.log, */ memory: true });

// check to see if we already initialized this database
let stmt = db.prepare(`SELECT name
    FROM sqlite_master
    WHERE
        type='table' and name='reactions'
    ;`);
let row = stmt.get();
if (row === undefined) {
  console.log('WARNING: database appears empty, initializing it.');
  const sqlInit = `
        CREATE TABLE reactions (
            id   INTEGER PRIMARY KEY AUTOINCREMENT,
            origin TEXT,
            user TEXT DEFAULT anon,
            reaction TEXT
        );
        `;
  db.exec(sqlInit);
}
console.log("database exists now, if it didn't already.");

const readReactions = db.prepare(
  'SELECT * FROM reactions WHERE origin IS $origin',
);
const get = key => {
  const data = readReactions.all({ origin: key });
  const response = data.reduce(
    (acc, row) => ({ ...acc, [row.reaction]: (acc[row.reaction] || 0) + 1 }),
    {},
  );
  return response;
};

const insertReaction = db.prepare(
  'INSERT INTO reactions (origin, reaction) VALUES ($origin, $reaction)',
);
const increase = (key, emoji) => {
  insertReaction.run({ origin: key, reaction: emoji });
  return get(key);
};

module.exports = { get, increase };
