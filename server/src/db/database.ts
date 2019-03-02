import mysql from 'promise-mysql';

import keys from '../keys';

const pool = mysql.createPool(keys.database);

// Iniciar la conexión
pool.getConnection().then((conexion) => {
  pool.releaseConnection(conexion);
  console.log('La base de datos está conectada');
});

export default pool;