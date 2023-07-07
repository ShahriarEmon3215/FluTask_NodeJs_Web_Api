const {createPool} = require('mysql')

const db = createPool(
    {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'flutask_web_db',
        //connectionLimit: 10
    }
)

module.exports = db