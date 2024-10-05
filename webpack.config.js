const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируй плагин

module.exports = {
  entry: './src/main.js', // Точка входа
  output: {
    filename: 'bundle.js', // Убедись, что это имя совпадает с тем, что указано в index.html
    path: path.resolve(__dirname, 'dist'), // Папка, в которую будет помещен собранный файл
    publicPath: '/', // Это важно для работы Vue Router в режиме history
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html', // Путь к исходному шаблону
        filename: 'index.html', // Имя выходного файла
        inject: true, // Вставляет bundle в файл
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
},
};
