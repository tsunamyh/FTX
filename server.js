const { default: axios } = require("axios")
const CryptoJS = require("crypto-js")
const url = "https://ftx.us/api/wallet/balances" 
const path = "/api/wallet/balances"
const timestamp = Date.now()
const method = "GET"
const payload = `{timestamp}{method}{url}`
const hash = CryptoJS.HmacSHA256(payload, process.env.FTX_API_SECRET)
// var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, "Secret Passphrase");
// hmac.update(JSON.stringify(timestamp));
// hmac.update(method);
// hmac.update(path);
// var hash = hmac.finalize();
const hash2 = crypto.createHmac('sha256', process.env.FTX_API_SECRET).update(payload).digest("hex")
console.log("API KEY ", process.env.FTX_API_KEY)
axios({
    method: "get",
    headers: {
        "FTXUS-SIGN": CryptoJS.enc.Hex.stringify(hash),
        // "FTXUS-SIGN": hash2,
        "FTXUS-KEY": process.env.FTX_API_KEY,
        "FTXUS-TS": timestamp,
    },
    url: url
})
.then( (response) => {
    if (response.data.success) {
        callback(null, response.data.result)
    } else {
        // error handling here for the api 
        callback(result.data.error)
    }
    
})
.catch ( (e) => {
    console.log("exception in request ", e)
})


