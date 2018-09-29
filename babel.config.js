module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					edge: '17',
					firefox: '60',
					chrome: '67',
					safari: '11.1'
				},
				// https://babeljs.io/docs/en/next/babel-preset-env.html#modules
				modules: false,
				useBuiltIns: 'usage'
			}
		]
	]
};
