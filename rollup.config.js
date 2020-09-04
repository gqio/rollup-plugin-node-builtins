
var external = Object.keys( require( './package.json' ).dependencies ).concat('path');
export default {
	input: 'src/index.js',
	output:[{file:'dist/index.js',format:'esm'},{file:'dist/main.js',format:'cjs'}],
	plugins: [ ],
	external: external
};
