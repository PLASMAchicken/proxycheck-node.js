const test = async () => {
	const proxy_check = require('.');
	const check = new proxy_check({ api_key: '111111-222222-333333-444444' });
	const result = await check.getUsage();
	console.log(result);
};
test();