const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new BundleAnalyzerPlugin({ analyzerMode: process.env.STATS || "disabled" }),
  new MiniCssExtractPlugin({ filename: 'main.css' })
];
  
if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}
  
if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new HtmlWebpackPlugin({
    template: "./src/index.html",
  }));
}

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, 'public/assets'),
    // this places all images processed in an image folder
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  mode: mode, // mode defaults to 'production' if not set
  target: target, // web by default
  devtool: 'inline-source-map', // source-map if the project is large...

  devServer: {
    static: { directory: './public' }, // It was contentBase: './dist' previously.
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader' // without additional settings, this will reference .babelrc
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // style-loader for internal CSS
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
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
        type: "asset",

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },

        use: [
          'file-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: plugins
}