// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0// fetch restuarant data from api
const axios = require('axios').default
var host = 'https://ftx.com';
var endpoint = '/api/futures/BTC-PERP';
var url = host + endpoint;
// var url = "https://api.exchange.coinbase.com/address-book"
// var url = 'https://localhost:3000/v1/products'

let options =  {
    mode: 'no-cors',
    withCredentials: true,
    headers: {
        // 'X-CSRFToken': 'Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm',
        // 'X-Requested-With': 'XMLHttpRequest',
        // Authorization: "Bearer Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm",
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // "content-type": 'application/json',
        // 'x-forwarded-for': '::1',
       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        // 'cache-control': 'max-age=0',
        // 'postman-token': 'e226b87a-9e55-4a9d-ae97-4291681f9a2c',
        // host: 'localhost:3000',
        // 'accept-encoding': 'gzip, deflate, br',
        // connection: 'keep-alive',
        // 'sec-ch-ua' : '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        // 'sec-ch-ua-mobile': '?0',
        // 'sec-ch-ua-platform': '"Windows"',
        // 'upgrade-insecure-requests' : '1',
        // 'sec-fetch-site': 'none',
        // 'sec-fetch-mode': 'navigate',
        // 'sec-fetch-user': '?1',
        // 'sec-fetch-dest': 'document',
        // 'accept-language': 'en-US,en;q=0.9',
    },
}

axios.get(url,options).then(function (response) {
    console.log('axios2:\n', response.data);
}).catch(function (error) {
    console.log('axios2 Errror:', error.message);
});

const config = {
    ...options,
    method: 'GET',
    url,
}
options.xsrfHeaderName = 'X-CSRFToken'

// axios(config).then(function (response) {
//     console.log('axios:\n', response.data);
// }).catch(function (error) {
//     console.log('axios Errror:', error.message);
// });


// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

// console.log(result);
