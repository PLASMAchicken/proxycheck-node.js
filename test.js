const test = async () => {
	const proxy_check = require('.');
	const check = new proxy_check({ api_key: '798999-nc1992-m5507l-v9606u' });
	const result = await check.getUsage();
	console.log(result);
};
test();