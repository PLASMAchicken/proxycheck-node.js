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
## Classes

<dl>
<dt><a href="#proxycheck">proxycheck</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#proxycheck_Constructor">proxycheck_Constructor</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#proxycheck_Options">proxycheck_Options</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#proxycheck_getUsageReturn">proxycheck_getUsageReturn</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#proxycheck_getDetectionsOptions">proxycheck_getDetectionsOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="proxycheck"></a>

## proxycheck
**Kind**: global class  

* [proxycheck](#proxycheck)
    * [new proxycheck(param0)](#new_proxycheck_new)
    * [.check(ip, options)](#proxycheck+check) ⇒ <code>Object</code>
    * [.getUsage()](#proxycheck+getUsage) ⇒ [<code>proxycheck\_getUsageReturn</code>](#proxycheck_getUsageReturn)
    * [.getQuerys()](#proxycheck+getQuerys) ⇒ <code>Object</code>
    * [.getDetections(options)](#proxycheck+getDetections) ⇒ <code>Object</code>

<a name="new_proxycheck_new"></a>

### new proxycheck(param0)

| Param | Type | Description |
| --- | --- | --- |
| param0 | <code>cmdConstructor</code> | Constructor. |

**Example**  
```js
const proxy_check = require('proxycheck-node.js');const check = new proxy_check({api_key: '111111-222222-333333-444444'});
```
<a name="proxycheck+check"></a>

### proxycheck.check(ip, options) ⇒ <code>Object</code>
Checks IP(s) with the proxycheck v2 api.

**Kind**: instance method of [<code>proxycheck</code>](#proxycheck)  
**Returns**: <code>Object</code> - Command Class.  

| Param | Type | Description |
| --- | --- | --- |
| ip | <code>String</code> \| <code>Array.&lt;String&gt;</code> | Ip to check |
| options | [<code>proxycheck\_Options</code>](#proxycheck_Options) | Options for the IP_check |

**Example**  
```js
const check = new proxy_check({api_key: '111111-222222-333333-444444'});const result = await check.check(['8.8.8.8', '1.1.1.1'], { vpn: true });console.log(result)
```
**Example**  
```js
const check = new proxy_check({api_key: '111111-222222-333333-444444'});const result = check.check('8.8.8.8', { vpn: true }).then(result => console.log(result))
```
<a name="proxycheck+getUsage"></a>

### proxycheck.getUsage() ⇒ [<code>proxycheck\_getUsageReturn</code>](#proxycheck_getUsageReturn)
Dashboard: Gets your Usage

**Kind**: instance method of [<code>proxycheck</code>](#proxycheck)  
**Returns**: [<code>proxycheck\_getUsageReturn</code>](#proxycheck_getUsageReturn) - Result  
**Example**  
```js
const check = new proxy_check({ api_key: '111111-222222-333333-444444' });const result = await check.getUsage();console.log(result);
```
<a name="proxycheck+getQuerys"></a>

### proxycheck.getQuerys() ⇒ <code>Object</code>
Dashboard: Gets your Querys

**Kind**: instance method of [<code>proxycheck</code>](#proxycheck)  
**Returns**: <code>Object</code> - Result  
**Example**  
```js
const check = new proxy_check({ api_key: '111111-222222-333333-444444' });const result = await check.getQuerys();console.log(result);
```
<a name="proxycheck+getDetections"></a>

### proxycheck.getDetections(options) ⇒ <code>Object</code>
Gets the Detections

**Kind**: instance method of [<code>proxycheck</code>](#proxycheck)  
**Returns**: <code>Object</code> - Result  

| Param | Type |
| --- | --- |
| options | [<code>proxycheck\_getDetectionsOptions</code>](#proxycheck_getDetectionsOptions) | 

**Example**  
```js
const check = new proxy_check({ api_key: '111111-222222-333333-444444' });const result = await check.getDetections({ limit: 50 });console.log(result);
```
<a name="proxycheck_Constructor"></a>

## proxycheck\_Constructor : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| api_key | <code>string</code> | The Api Key |

<a name="proxycheck_Options"></a>

## proxycheck\_Options : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [vpn] | <code>Boolean</code> | <code>false</code> | When the vpn flag is supplied we will perform a VPN check on the IP Address and present the result to you. |
| [asn] | <code>Boolean</code> | <code>false</code> | When the asn flag is supplied we will perform an ASN check on the IP Address and present you with the provider name, ASN, country, country isocode, city (if it's in a city) and lang/long for the IP Address. |
| [node] | <code>Boolean</code> | <code>node</code> | When the node flag is supplied we will display which node within our cluster answered your API call. This is only really needed for diagnosing problems with our support staff. |
| [time] | <code>Boolean</code> | <code>false</code> | When the time flag is supplied we will display how long this query took to be answered by our API excluding network overhead. |
| [inf] | <code>Boolean</code> | <code>true</code> | When the inf flag is set to 0 (to disable it) we will not run this query through our real-time inference engine. In the absence of this flag or if it's set to 1 we will run the query through our real-time inference engine. |
| [risk] | <code>false</code> \| <code>1</code> \| <code>2</code> | <code>false</code> | When the risk flag is set to 1 we will provide you with a risk score for this IP Address ranging from 0 to 100. Scores below 33 can be considered low risk while scores between 34 and 66 can be considered high risk. Addresses with scores above 66 are considered very dangerous. When the risk flag is set to 2 we will still provide you with the above risk score but you'll also receive individual counts for each type of attack we witnessed this IP performing across our customer network and our own honeypots within the days you specify by the &days= flag. |
| [port] | <code>Boolean</code> | <code>false</code> | When the port flag is supplied we will display to you the port number we saw this IP Address operating a proxy server on. |
| [seen] | <code>Boolean</code> | <code>false</code> | When the seen flag is supplied we will display to you the most recent time we saw this IP Address operating as a proxy server. |
| [days] | <code>Number</code> | <code>7</code> | When the days flag is supplied we will restrict our proxy results to between now and the amount of days you specify. For example if you supplied &days=2 we would only check our database for Proxies that we saw within the past 48 hours. By default without this flag supplied we search within the past 7 days. |
| [tag] | <code>String</code> |  | When the tag flag is supplied we will tag your query with the message you supply. |

<a name="proxycheck_getUsageReturn"></a>

## proxycheck\_getUsageReturn : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [error] | <code>String</code> | Error? |
| [queries_today] | <code>Number</code> |  |
| [daily_limit] | <code>Number</code> |  |
| [queries_total] | <code>Number</code> |  |
| [plan_tier] | <code>String</code> |  |

<a name="proxycheck_getDetectionsOptions"></a>

## proxycheck\_getDetectionsOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [limit] | <code>Number</code> | <code>100</code> | 
| [offset] | <code>Number</code> | <code>0</code> | 

