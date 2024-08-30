const path = require('path');

module.exports = {
  entry: './src/index.js', // Seu ponto de entrada JS
  output: {
    filename: 'bundle.js', // Arquivo de saída
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
