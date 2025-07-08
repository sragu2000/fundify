const AppError = require("../configurations/AppError");
const { generatePayHereHash, validatePayHereHash } = require("../functions/payhere");


const payhereNotifyWebhook = async (req, res, next) => {
    try {
        const validationHash = validatePayHereHash(
            req.body.order_id,
            req.body.payhere_amount,
            req.body.payhere_currency,
            req.body.status_code
        );

        if (req.body.md5sig === validationHash && req.body.status_code == "2") {
            console.log("Payment Received Successfully")
            console.log(req.body);
            const savedPayment = await Payment.create(req.body);
            console.log(savedPayment);
            return res.status(200).json({ "message": "Payment Received Successfully" })
        }

    } catch (error) {
        next(error)
    }
};

const generatePayhereHash = async (req, res, next) => {
    console.log("REQ POST")
    const orderid = req.body.orderid;
    const amount = parseFloat(req.body.amount).toFixed(2);
    const currency = req.body.currency;
    try {
        return res.status(200).json({
            hash: generatePayHereHash(orderid, amount, currency),
            order_id: orderid,
            amount: amount,
            currency: currency
        })
    } catch (error) {
        next(error)
    }
};


// const payhereRefund = async (req, res, next) => {
//     try {
//         if (!req.body?.id && !req.body?.description) {
//             return res.status(400).json({ "status": false, "message": "id and description is required" })
//         }

//         const paymentDocument = await Payment.findById(req.body.id)
//         if (!paymentDocument) {
//             return res.status(404).json({ "status": false, "message": "Invalid id" })
//         }

//         const accessToken = await functions.getAccessToken();
//         if (accessToken.status == false) {
//             return res.status(500).json({ "status": false, "message": "Can not retrive access token. " + accessToken.message })
//         }

//         const headers = {
//             "Authorization": `Bearer ${accessToken.token}`,
//             // "Authorization": `Bearer 7ca4ebaq-3a3d-4f81-a65b-41d95af54494`,
//             "Content-Type": "application/json"
//         }
//         const body = {
//             "payment_id": paymentDocument.payment_id,
//             // "payment_id": "123",
//             "description": req.body?.description,
//         }
//         try {
//             const response = await axios.post("https://sandbox.payhere.lk/merchant/v1/payment/refund", body, { headers });
//             if (response.data.status == 1) {
//                 paymentDocument.refund = {
//                     "id": response.data.data,
//                     "description": "Refund Requested",
//                     "updated_at": Date.now,
//                 }
//                 paymentDocument.save();
//                 return res.status(200).json({ "status": true, "message": "Payment Refunded Successfully", "responseFromPayHere": response.data })
//             } else if (response.data.status == -1) {
//                 return res.status(400).json({ "status": false, "message": "Refund requested", "responseFromPayHere": response.data })
//             } else {
//                 return res.status(400).json({ "status": false, "message": "Error initiating the refund: ", "responseFromPayHere": response.data })
//             }
//         } catch (error) {
//             if (error.response.data.error == "invalid_token") {
//                 return res.status(400).json({
//                     "status": false, "message": "Invalid token", "responseFromPayHere": error.response.data
//                 })
//             } else if (error.response.data.status == -1) {
//                 return res.status(400).json({
//                     "status": false, "message": "Error processing refund", "responseFromPayHere": error.response.data
//                 })
//             } else if (error.response.data.status == -2) {
//                 return res.status(401).json({
//                     "status": false, "message": "Authentication error", "responseFromPayHere": error.response.data
//                 })
//             } else {
//                 return res.status(400).json({
//                     "status": false, "message": "Unexpected error", "responseFromPayHere": error.response.data
//                 })
//             }
//         }
//     } catch (error) {
//         return res.status(500).json({ "status": false, "message": "Internal Server Error" })
//     }
// };



module.exports = {
    payhereNotifyWebhook, generatePayhereHash
};
