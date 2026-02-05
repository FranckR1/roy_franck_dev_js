import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: '',
    password: '',
});

pool.getConnection();