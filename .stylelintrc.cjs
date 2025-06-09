/** @type {import('stylelint').Config} */
module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		'at-rule-no-vendor-prefix': true,
		'color-named': 'never',
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': [
			'always',
			{
				except: ['empty'],
			},
		],
		'media-feature-name-no-vendor-prefix': true,
		'no-descending-specificity': null,
		'selector-attribute-quotes': 'always',
		'selector-no-vendor-prefix': true,
	},
};
