require('dotenv').config();
const jsSHA = require('jssha');
const UrlFetchApp = require('@dgcode/url-fetch-app');


function getKrakenSignature (path, postdata, nonce) {
    var sha256obj = new jsSHA ("SHA-256", "BYTES");
    sha256obj.update (nonce + postdata);
    var hash_digest = sha256obj.getHash ("BYTES");

    var sha512obj = new jsSHA ("SHA-512", "BYTES");
    sha512obj.setHMACKey ("HMACKEY", "B64");
    sha512obj.update (path);
    sha512obj.update (hash_digest);
    return sha512obj.getHMAC ("B64");
}

function getKrakenBalance () {
    var path = "/0/private/Balance";
    var nonce = new Date () * 1000;
    var postdata = "nonce=" + nonce;

    var signature = getKrakenSignature (path, postdata, nonce);

    var url = "https://api.kraken.com" + path;
    var options = {
    method: 'post',
    headers: {
        'API-Key': "Lwr8DdhUHibXgGN8pfEV-_hzAqKqUCteeiB2p_Mm",
        'API-Sign': signature
    },
    payload: postdata
    };

    var response = UrlFetchApp.fetch (url, options);
console.log('response: ', response);

    return response.getContentText ();
}

function main() {
    console.log(getKrakenBalance());
}

main()