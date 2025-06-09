/** @type {Record<string, string | string[] | Promise<string | string[]>} */
const config = {
	'*.?({c,m}){j,t}s?(x)': ['prettier --write', 'xo --fix'],
	'*.css': ['prettier --write', 'stylelint --fix'],
	'*.(html|json|md?(x)|y?(a)ml)': 'prettier --write',
};

export default config;
