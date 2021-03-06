const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: "/demo/videostoreproj/land/static/land/js/",
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // inject CSS to page
          }, 
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, 
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/index.css',
    }),
  ],
};