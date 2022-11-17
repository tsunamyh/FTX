// // require('dotenv').config(); 
// // const jsSHA = require('jssha');
// // const UrlFetchApp = require('@dgcode/url-fetch-app');
// const fetch = require('node-fetch');
const axios = require("axios").default
const { HttpsProxyAgent } = require("https-proxy-agent");
// var host = 'https://ftx.com';
// var endpoint = '/api/futures/BTC-PERP';
// var url = host + endpoint;
// var url = "https://api.exchange.coinbase.com/address-book"
// // var timestamp = '' + new Date().getTime();
// // var payload = timestamp + 'GET' + endpoint + '';

// // var shaObj = new jsSHA("SHA-256", "BYTES");
// // shaObj.setHMACKey('JOTRaDHcV4i3x0GX7ih5l8wlb-QFw7Zs0_58eMc4', "BYTES");
// // shaObj.update(payload);
// // var signature = shaObj.getHMAC("HEX");

// // var sha_ob = new jsSHA('SHA-256', 'TEXT');
// // sha_ob.setHMACKey('JOTRaDHcV4i3x0GX7ih5l8wlb-QFw7Zs0_58eMc4', 'TEXT');
// // sha_ob.update('Add your text');
// // var hmac = sha_ob.getHMAC('HEX');

// // var options = {
// //   method: 'get',
// //   headers: {
// //     'FTX-KEY': 'Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm',
// //     'FTX-TS': timestamp,
// //     'FTX-SIGN': signature
// //   },
// //   muteHTTPExceptions: 'true'
// // }
// // console.log(signature);
// // console.log(options);
// // async function getFTXBTC() {
// //   console.log(`Loading FTX BTC Data....`);
// //   const response = await axios.get('https://ftx.com/api/futures/BTC-PERP')
// //   if (response.status !== 200) {
// //     throw new Error('Request Failed.\n' + `Status Code: ${response.status}`)
// //   }

// //   console.log(response.data.docs[0].price);
// // }
// // getFTXBTC();
// // console.log('jsondata: ', jsondata);
// // var data   = JSON.parse(jsondata.getContentText());
// // console.log('data: ', data);
// // console.log('options: ', options);
// // async function populateLaunches() {
// //   console.log(`Loading Launch Data....`);
// //   const response = await axios.post('https://api.spacexdata.com/v4/launches/query', {
// //     query: {},
// //     options: {
// //       pagination: false,
// //       populate: [
// //         {
// //           path: 'rocket',
// //           select: {
// //             name: 1
// //           }
// //         },
// //         {
// //           path: 'payloads',
// //           select: {
// //             customers: 1
// //           }
// //         }

// //       ]
// //     }
// //   })

// //   if (response.status !== 200) {
// //     console.log(`problem downloading launch data`);
// //     throw new Error(`Error Loading Launch Data: ${response.status}`)
// //   }

// //   const launchDocs = response.data.docs
// //   console.log(`Loaded ${launchDocs.length} Launch Data`);
// // }

// // populateLaunches();
// const options = {
//   method: 'GET',
//   url: "https://ftx.com/api/futures/BTC-PERP",
//   withCredentials: true,
//   headers: {
//     'X-CSRFToken': 'Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm',
//     'X-Requested-With': 'XMLHttpRequest',
//     Authorization: "Bearer Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm",
//     // 'Content-Type': 'application/x-www-form-urlencoded'
//     "Content-Type": 'application/json',
//     'user-agent': 'PostmanRuntime/7.29.0',
//     accept: '*/*',
//     'cache-control': 'no-cache',
//     'postman-token': 'de05ac8e-0fba-4c2c-81ed-0faecc097891',
//     host: 'https://ftx.com',
//     'accept-encoding': 'gzip, deflate, br',
//     connection: 'keep-alive'
//   },
// }
// // const CORS_PROXY_API = `https://cors-anywhere.herokuapp.com/`
// // const baseUrl = CORS_PROXY_API + url;
// // axios(options).then(function (response) {
// //   console.log('axios:\n', response.data);
// // }).catch(function (error) {
// //   console.log('axios EEEEEEEEEEEEEErrror:', error.message);
// // });
// let stats
// fetch(url).then(async function (response) {
//   stats = response.status
//   // const data = await response.text();
//   const data = await response.json();
//   console.log('fetch:\n', data);
// }).catch(function (error) {
//   console.log(`fetch EEEEEEEEEEEEEErrror:${stats} ${error.message}`);
// });

// // async function getFTXBTC() {

// //   const { data } = await axios({
// //     method: 'get',
// //     url: baseUrl
// //   });
// //   console.log('axios:\n', data);
// // }
// // getFTXBTC();

// const crypto = require('crypto');
// const qs     = require('qs');

// const getMessageSignature = (path, request, secret, nonce) => {
//     const message       = qs.stringify(request);
//     const secret_buffer = new Buffer(secret, 'base64');
//     const hash          = new crypto.createHash('sha256');
//     const hmac          = new crypto.createHmac('sha512', secret_buffer);
//     const hash_digest   = hash.update(nonce + message).digest('binary');
//     const hmac_digest   = hmac.update(path + hash_digest, 'binary').digest('base64');
//     return hmac_digest;
// };

let HttpsAgent = require("https-proxy-agent")
let agent = new HttpsAgent("http://192.168.1.3:8080")

axios.get("https://api2.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5",{
  httpsAgent : agent,
  httpAgent: agent, 
  // proxy : {
  //   host: "192.168.1.3",
  //   port : 8080,
  // }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function(err){
    console.log(err.message);
  })

  axios({
    
  })