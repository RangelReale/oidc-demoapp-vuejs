const fs = require('fs');
require('dotenv').config()

module.exports = {
    configureWebpack: {
        devtool : 'source-map'
    },
    devServer: {
        https: process.env.HTTPS ? true : false,
        key: process.env.HTTPS_KEY ? fs.readFileSync(process.env.HTTPS_KEY) : undefined,
        cert: process.env.HTTPS_CERT ? fs.readFileSync(process.env.HTTPS_CERT) : undefined,
        ca: process.env.HTTPS_CA ? fs.readFileSync(process.env.HTTPS_CA) : undefined,
        allowedHosts: [
            process.env.ALLOWED_HOSTS,
        ],
        public: process.env.PUBLIC_URL
    }
}