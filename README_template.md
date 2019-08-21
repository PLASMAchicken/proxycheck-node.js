# proxycheck-node.js
node.js library for calling the [proxycheck.io](https://proxycheck.io/) v2 API which allows you to check if an IP Address is a Proxy or VPN and get the Country, ASN and Provider for the IP Address being checked.

## Install via npm/yarn ##

You can install the library via [npm](https://www.npmjs.com/get-npm) by running the following command:

```bash
npm i proxycheck-node.js
```

# Usage
## One IP
### async/await
```js
const proxy_check = require('proxycheck-node.js'); 
const check = new proxy_check({api_key: '111111-222222-333333-444444'}); 
const result = await check.check('127.0.0.1');
console.log(result)
```
### .then
```js
const proxy_check = require('proxycheck-node.js'); 
const check = new proxy_check({api_key: '111111-222222-333333-444444'}); 
const result = check.check('127.0.0.1').then(result => console.log(result));
```
### async/await with options
```js
const proxy_check = require('proxycheck-node.js'); 
const check = new proxy_check({api_key: '111111-222222-333333-444444'}); 
const result = await check.check('127.0.0.1', { vpn: true });
console.log(result)
```
## Multiple IPs
### async/await with options
```js
const proxy_check = require('proxycheck-node.js'); 
const check = new proxy_check({api_key: '111111-222222-333333-444444'}); 
const result = await check.check(['8.8.8.8', '1.1.1.1'], { vpn: true });
console.log(result)
```
```js
{
  status: 'ok',
  '8.8.8.8': { proxy: 'no' },
  '1.1.1.1': { proxy: 'no' }
}
```

## Service Limits ##

* Free users without an API Key = 100 Daily Queries
* Free users with an API Key = 1,000 Daily Queries
* Paid users with an API Key = 10,000 to 10.24 Million+ Daily Queries

Get your API Key at [proxycheck.io](http://proxycheck.io/) it's free.

# Docs
<docs></docs>