import MySQL from 'mysql';
import Config from '../app-config';

const db = MySQL.createConnection(
  {
    host: Config.db.mysql.hostname,
    user: Config.db.mysql.username,
    password: Config.db.mysql.password,
    database : Config.db.mysql.database,
    multipleStatements: Config.db.mysql.multipleStatements
  }
);

if (Config.db.mysql.enabled) {
  db.connect((err) => {
    if (err) {
      console.log(`Couldn't connect to MySQL database`);
      throw err;
    }
  });
}

export default db;
