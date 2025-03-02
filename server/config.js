require('dotenv').config();

module.exports = {
    CONFIG_PORT: process.env.PORT,
    CONFIG_ROLES: {
        admin: "admin",
        fundraiser: "fundraiser",
        contributor: "contributor"
    },
    CONFIG_DATABASE: {
        uri: process.env.DB_URI,
    },
    CONFIG_MAILER: {
        fromMail: "",
        password: "",
        host: "",
        port: 465,
    },
    CONFIG_JWT: {
        secret: "ndfgshfil4v457yai#$^#%7y64578#@",
        expire: "1d",
        refreshSecret: "347y34jhjwqa34i6peby468%^&(*$&^Ek",
        refreshExpire: "7d"
    },
    CONFIG_CLOUDINARY: {
        cloud_name: "",
        api_key: "",
        api_secret: "",
    },
}