require("dotenv").config();
const mysql = require("mysql2");

const urlBD = `mysql://root:c6gbh2DF3gga35241hgfb5EEhC3Eed5F@roundhouse.proxy.rlwy.net:45514/railway`

const connection = mysql.createConnection(urlBD);

module.exports = connection