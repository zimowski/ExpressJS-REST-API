import Config from '../../app.config';

export default {
  getUserByUsername: (username, onSuccess, onError) => {
    db.query(
      `SELECT * FROM ${Config.db.mysql.prefix}users WHERE username = ? AND is_active = 0 LIMIT 1`,
      [username],
      (error, results, fields) => {
        if (error) {
          return onError(error);
        }
        return onSuccess(results[0]);
      }
    );
  }
};
