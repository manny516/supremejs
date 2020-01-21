const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
    },

    module:{
    	rules:[
    		{

    			test: /|.js$/,
    			exclude:/(node_modules)/,
    			use:{
    				loader: 'babel-loader',
                    options:{
                        presets:[ '@babel/preset-env']
                    }
    			}

    		},
            {

                test: /\.s[ac]ss$/i,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                    
                    
                ]
            }
    	]
    },
    devServer: {
        inline:true,
        contentBase : './dist',
        port: 4000 ,
    },
    mode: "development"
};