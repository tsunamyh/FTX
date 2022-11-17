// const axios = require('axios');
// const hmacSHA256 = require('crypto-js/hmac-sha256')
// const Hex = require('crypto-js/enc-hex')


// // const { 'hmac-sha256': hmacSHA256, 'enc-hex': Hex } = require('crypto-js');
// const method = 'get';
// const FTX_TS =  Date.now();
// const apiKey = 'ZigQljTgBT-YtWIYDjDBTW_T80sa71NNCTRM_fDi';
// const apiSecretKey = 'sC9b6GvHGs_ohLtlSiMJSahL0YXA9Lp49mc5iEU_'
// const FTX_SIGN = sign(method);

// const ftxReq = axios.create({
//     baseURL: 'https://ftx.com/api/',
//     method,
//     timeout: 5000,
//     headers: {
//       'accept': 'application/json',
//       'Content-Type': 'application/json; utf-8',
//       'FTX-KEY': apiKey,
//       'FTX-SIGN': FTX_SIGN,
//       'FTX-TS': FTX_TS
//     //   'FTX-SUBACCOUNT': subaccount
//     }
//   });

// ftxReq('futures/BTC-PERP').then((res) => {
//     console.log('res: ', res.data.response)
// }).catch(err => {
//     console.log('err: ', err.message);
// })

//   function sign(method){
//     const now = Date.now()
//     method = method.toUpperCase()
//     let sign = now + method;
//     let signed = hmacSHA256(sign, apiSecretKey).toString(Hex);
//     console.log(signed);
//     return signed;
//   }