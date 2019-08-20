const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
class proxycheck {
	/**
	 * @typedef {Object} proxycheck_Constructor
	 *
	 * @property {string} api_key - The Api Key
	 */
	/**
	 *
	 * @param {cmdConstructor} param0 - Constructor.
	 */
	constructor({
		api_key,
	}) {
		this.api_key = api_key;
		return this;
	}

	/**
	 * @typedef {Object} proxycheck_Options
	 *
	 * @property {Boolean} [vpn=false] - When the vpn flag is supplied we will perform a VPN check on the IP Address and present the result to you.
	 * @property {Boolean} [asn=false] - When the asn flag is supplied we will perform an ASN check on the IP Address and present you with the provider name, ASN, country, country isocode, city (if it's in a city) and lang/long for the IP Address.
	 * @property {Boolean} [node=node] - When the node flag is supplied we will display which node within our cluster answered your API call. This is only really needed for diagnosing problems with our support staff.
	 * @property {Boolean} [time=false] - When the time flag is supplied we will display how long this query took to be answered by our API excluding network overhead.
	 * @property {Boolean} [inf=true] - When the inf flag is set to 0 (to disable it) we will not run this query through our real-time inference engine. In the absence of this flag or if it's set to 1 we will run the query through our real-time inference engine.
	 * @property {false|1|2} [risk=false] - When the risk flag is set to 1 we will provide you with a risk score for this IP Address ranging from 0 to 100. Scores below 33 can be considered low risk while scores between 34 and 66 can be considered high risk. Addresses with scores above 66 are considered very dangerous. When the risk flag is set to 2 we will still provide you with the above risk score but you'll also receive individual counts for each type of attack we witnessed this IP performing across our customer network and our own honeypots within the days you specify by the &days= flag.
	 * @property {Boolean} [port=false] - 	When the port flag is supplied we will display to you the port number we saw this IP Address operating a proxy server on.
	 * @property {Boolean} [seen=false] - When the seen flag is supplied we will display to you the most recent time we saw this IP Address operating as a proxy server.
	 * @property {Number} [days=7] - When the days flag is supplied we will restrict our proxy results to between now and the amount of days you specify. For example if you supplied &days=2 we would only check our database for Proxies that we saw within the past 48 hours. By default without this flag supplied we search within the past 7 days.
	 * @property {String} [tag] - When the tag flag is supplied we will tag your query with the message you supply.

	 */
	/**
	 *  Assigns the command executor function to the callback provided.
	 *
	 * @param {String|String[]} ip - Ip to check
	 * @param {proxycheck_Options} options - Ip to check
	 * @returns {Object} Command Class.
	 */
	async check(ip, options) {
		if(!options) options = {};
		let url;
		if(Array.isArray(ip)) {
			url = 'http://proxycheck.io/v2/' + '?key=' + this.api_key;
		}
		else {
			url = 'http://proxycheck.io/v2/' + ip + '?key=' + this.api_key;
		}
		if(options.vpn) url += '&vpn=1';
		if(options.asn) url += '&asn=1';
		if(options.node) url += '&node=1';
		if(options.time) url += '&time=1';
		if(options.inf) url += '&inf=1'; else url += '&inf=0';
		if(options.risk) url += '&risk=' + options.risk; else url += '&risk=0';
		if(options.port) url += '&port=1';
		if(options.seen) url += '&seen=1';
		if(options.days) url += '&days=' + options.days;
		if(options.tag) url += '&tag=' + options.tag;
		if(Array.isArray(ip)) {
			console.log(url);

			const params = new URLSearchParams();
			params.append('ips', ip.join(','));

			return fetch(url, { method: 'POST', body: params })
				.then(res => res.json());
		}
		else {
			return fetch(url).then(res => res.json());
		}
	}
}
module.exports = proxycheck;