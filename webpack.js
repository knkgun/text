const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('@nextcloud/webpack-vue-config')

webpackConfig.entry = {
	text: path.join(__dirname, 'src', 'main.js'),
	files: path.join(__dirname, 'src', 'files.js'),
	public: path.join(__dirname, 'src', 'public.js'),
	viewer: path.join(__dirname, 'src', 'viewer.js'),
}

webpackConfig.output.chunkFilename = '[id].js?v=[contenthash]'

webpackConfig.optimization.chunkIds = 'named'
webpackConfig.optimization.splitChunks.cacheGroups = {
	defaultVendors: {
		test(module) {
			return module.resource && module.resource.includes(`${path.sep}node_modules${path.sep}`) &&
				!module.resource.includes(`${path.sep}highlight.js${path.sep}`)
		},
		name: 'vendors',
	}
}

webpackConfig.resolve.modules = [
	path.resolve(__dirname, 'node_modules'),
	'node_modules'
]

// Add EMOJIS const as custom plugin
const emojisData = require('emoji-datasource/emoji.json')
const EMOJIS = emojisData
	.filter(emoji => emoji.short_name)
	.reduce((accumulator, current) => {
		// Add current emoji
		const emoji = Object.assign({}, current)
		emoji.value = String.fromCodePoint(...emoji.unified.split('-').map(hex => '0x' + hex))
		delete emoji.skin_variations
		accumulator.push(emoji)

		// Handle variations, take the current emoji and replace with variations
		if (current.skin_variations) {
			Object.values(current.skin_variations).forEach((variation) => {
				const emojiVariation = Object.assign({}, current, variation)
				emojiVariation.value = String.fromCodePoint(...emojiVariation.unified.split('-').map(hex => '0x' + hex))
				delete emojiVariation.skin_variations
				accumulator.push(emojiVariation)
			})
		}
		return accumulator
	}, [])
console.info('Emojis count:', EMOJIS.length, typeof emojisData)

webpackConfig.plugins.push(...[
	new webpack.DefinePlugin({
		EMOJIS: JSON.stringify(EMOJIS),
	}),
])

module.exports = webpackConfig
