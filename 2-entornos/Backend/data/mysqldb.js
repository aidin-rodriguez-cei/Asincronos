import mysql from 'mysql2/promise'

import { mysqlConfig } from '../config/config.js'

const mysqlbd = await mysql.createConnection(mysqlConfig)

export default mysqlbd;
