const credentials = require("./credentials")
const crypto = require('crypto');
const AccessToken = require('../models/payhere.model');
const querystring = require('querystring');
const axios = require('axios');


// Generates PayHere Hash beofore showing payment window to use
function generatePayHereHash(order_id, amount, currency) {
    const merchant_id = credentials.merchantId
    const merchantSecretHash = crypto.createHash("md5").update(credentials.merchantSecret).digest("hex").toUpperCase();
    const hashInput = `${merchant_id}${order_id}${amount}${currency}${merchantSecretHash}`
    const hash = crypto.createHash("md5").update(hashInput).digest("hex").toUpperCase();
    return hash;
}

// Verifies notify is called by payment processor
function validatePayHereHash(order_id, payhereamount, payherecurrency, statuscode) {
    const merchant_id = credentials.merchantId
    const merchantSecretHash = crypto.createHash("md5").update(credentials.merchantSecret).digest("hex").toUpperCase();
    const hashInput = `${merchant_id}${order_id}${payhereamount}${payherecurrency}${statuscode}${merchantSecretHash}`
    const hash = crypto.createHash("md5").update(hashInput).digest("hex").toUpperCase();
    return hash;
}


// https://support.payhere.lk/api-&-mobile-sdk/refund-api
// 3. Retrieve an Access Token
// get valid access token
// Get new Access Token for refund from payment processor
async function getNewAccessToken() {
    try {
        const requestBody = { "grant_type": "client_credentials" }
        const data = querystring.stringify(requestBody);
        const headers = { Authorization: `Basic ${credentials.authorizationCode}` }

        const payhereResponse = await axios.post(`https://sandbox.payhere.lk/merchant/v1/oauth/token`, data, { headers });
        const newAccessToken = await AccessToken.create(payhereResponse.data);
        return {
            "status": true,
            "message": "New Access token derived and saved to the database",
            "token": newAccessToken.access_token
        };
    } catch (error) {
        console.log(error)
        return {
            "status": false,
            "message": "Internal Server Error"
        };
    }
}

function validateAccessToken(tokenInfo) {
    // Get the current time
    const currentTime = new Date();
    // Convert token timestamp to Date object
    const tokenTimestamp = new Date(tokenInfo.timestamp);
    // Get expiration time in seconds : 599 is expire time, lets take 500 for safe
    const expiresInSeconds = parseInt(tokenInfo.expires_in) - 99;
    // Calculate expiration time by adding expires_in seconds to token timestamp
    const expirationTime = new Date(tokenTimestamp.getTime() + (expiresInSeconds * 1000));
    // Check if current time is less than expiration time
    if (currentTime < expirationTime) {
        return true; // Token is valid
    } else {
        return false; // Token has expired
    }
}

async function getAccessToken() {
    try {
        const accessToken = await AccessToken.findOne().sort({ _id: -1 }).exec();
        if (!accessToken) { return (await getNewAccessToken()); }
        if (validateAccessToken(accessToken)) {
            return {
                "status": true,
                "message": "Access token derived from database",
                "token": accessToken.access_token
            }
        } else {
            return (await getNewAccessToken());
        }
    } catch (error) {
        return {
            "status": false,
            "message": "Access token derived from database",
        }
    }
}

module.exports = {
    generatePayHereHash, validatePayHereHash, getAccessToken
}