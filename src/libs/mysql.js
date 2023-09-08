import mysql from "serverless-mysql";

export const coon = mysql({
    config: {
    host: 'localhost',
    user: 'root',
    password: '#LSmysql707#',
    port: 3306,
    database: 'nextmysqlcrud'
    }

})