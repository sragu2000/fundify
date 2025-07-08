const localhostMerchantSecret = "MzI0NTE5NzcyNjk0Njc5NDczMjU0NDM2MTM4NTI4MTY4ODg4MDM="
const merchantSecret = localhostMerchantSecret;
const merchantId = "1226300"

const appId = "4OVxMwPLHDU4JEVNu2V4773LI"
const appSecret = "48VZXySo6SM8LN53EG9XYv4q8DR3v5WxW8LWMTD9aTZv"
// authorizationCode structure = base64(appId+":"+appSecret)
const authorizationCode = btoa(appId + ":" + appSecret);

module.exports = {
    authorizationCode, merchantSecret, merchantId
}