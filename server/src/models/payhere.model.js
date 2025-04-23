const mongoose = require('mongoose');

const payhereToken = new mongoose.Schema({
    access_token: { type: String, required: true },
    token_type: { type: String, required: true },
    scope: { type: String, required: true },
    expires_in: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Payhere = mongoose.model('Payhere', payhereToken);

module.exports = Payhere;