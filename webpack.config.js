const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'),
    },
    devServer: {
        inline:true,
        contentBase : './dist',
        port: 4000 ,
    },
};