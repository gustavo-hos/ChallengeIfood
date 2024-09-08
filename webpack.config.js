const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        login: './src/assets/js/pages/login.js',
        dashboard: './src/assets/js/pages/dashboard.js',
        configuracoes: './src/assets/js/pages/configuracoes.js',
        esqueci_a_senha: './src/assets/js/pages/esqueci-a-senha.js',
        pagamentos: './src/assets/js/pages/pagamentos.js',
        relatorios: './src/assets/js/pages/relatorios.js',
        transacoes: './src/assets/js/pages/transacoes.js',
        estoque: './src/assets/js/pages/estoque.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/assets/js/pages'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }]
                          ]
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'source-map',
};