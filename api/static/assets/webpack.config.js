const config = {
	entry: __dirname + '/src/index.js',
	module: { 
		rules: [
		  {
		    test: /\.js$/,
            exclude: /node_modules/,
			loader: 'babel-loader',
		  }
		]			
	},
	output: {
	   filename: 'bundle.js',
	   path: __dirname + '/build'   	
	}
};

module.exports = config;

