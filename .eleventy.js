/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
function config(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		'src/_static': '.',
	});
	return {
		dir: {
			input: 'src',
			output: 'public',
			layouts: '_layouts',
		},
	};
}

export default config;
