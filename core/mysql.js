import MySQL from 'mysql';
import Config from '../app-config';

const db = MySQL.createConnection(
  {
    host: Config.mysql.hostname,
    user: Config.mysql.username,
    password: Config.mysql.password,
    database : Config.mysql.database,
    multipleStatements: true
  }
);

db.connect((err) => {
  if (err) {
    console.log(`Couldn't connect to MySQL database`);
    throw err;
  }
});

export default db;
