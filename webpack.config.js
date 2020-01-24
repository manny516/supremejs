const path = require('path');

module.exports = {
    entry : './src/index.js',
    module:{
    	rules:[
    		{

    			test: /|.js$/,
    			exclude:/node_modules/,
    			use:  ['babel-loader']

    		},
            {
                test:/\.s[ac]ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                  ],
            }
    	]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
    },
    devServer: {
        inline:true,
        contentBase : './dist',
        port: 4000 ,
    },
    mode: "development"
};