const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const mod = process.env.NODE_ENV || "development";
/*
  if (process.env.NODE_ENV === "production") {
    mode = "production";
    // Temporary workaround for 'browserslist' bug that is being patched in the near future
    target = "browserslist";
  }
*/
/*
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    })
  );
}
*/

module.exports={
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',

  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets/'),
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    // new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: process.env.STATS || 'disabled' }),
  ],

  devtool: 'inline-source-map',

  devServer: {
    static: { directory: './dist' }, // It was contentBase: './dist' previously.
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // will use .babelrc
      },
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // style-loader for internal CSS
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle as base64
         * with a default max inline size of 8kb
         */
        type: 'asset',

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },

        // use: ["file-loader"],
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.mjs',
      '.cjs',
      '.json',
      '.scss',
      '.css',
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.ico',
      '.svg',
    ],
  },
};
