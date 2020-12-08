const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const generateScopedName = require('./generateScopedName');

const srcPath = path.join(__dirname, './src');

module.exports = env => {
  const isEnvProduction = env.production;
  const isEnvDevelopment = env.development;
  return {
    entry: {
      app: path.join(srcPath, './index.tsx'), // 入口文件
    },
    module: {
      noParse: /jquery/,
      rules: [
        { parser: { requireEnsure: false }, test: /\.(ts|tsx)$/ },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          include: srcPath,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: isEnvDevelopment
                  ? {
                      localIdentName: '[name]-[local]-[hash:base64:5]',
                    }
                  : {
                      getLocalIdent: (context, localIdentName, localName) => {
                        return generateScopedName(localName, context.resourcePath);
                      },
                    },
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024,
            },
          },
        },
      ],
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src')],
      extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.d.ts'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    optimization: {
      splitChunks: {
        name: false,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'initial',
            test: /node_modules/,
            priority: 20,
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new WebpackBar({
        name: '拼多多搬家',
        color: '#2f54eb',
      }),
      new ESLintPlugin({
        extensions: ['.ts', '.tsx'],
        emitWarning: true,
        lintDirtyModulesOnly: true,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './template.html',
        favicon: path.join(srcPath, './assets/favicon/favicon.ico'),
        ...(isEnvProduction
          ? {
              minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined),
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isEnvProduction ? 'production' : 'development'),
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isEnvDevelopment,
      }),
      // new BundleAnalyzerPlugin()
    ],
  };
};
