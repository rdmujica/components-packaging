const path = require('path')
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin')
const componentName = 'button'
module.exports = {
  target: 'web',
  entry: `./src/${componentName}/index.js`,
  output: {
    path: path.resolve(__dirname, `bin/${componentName}`),
    filename: 'dist/index.js',
    library: `the-best-${componentName}2`,
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    'the-best-loading': 'the-best-loading',
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  plugins: [
    new CopyPkgJsonPlugin({
      new: {
        name: `the-best-${componentName}2`,
        version: '1.0.0',
        description: 'This is a test with Webpack and React',
        main: 'dist/index.js',
        repository: '',
        peerDependencies: {
          react: 'latest',
          'react-dom': 'latest',
        },
        dependencies: {
          'the-best-loading': 'latest',
        },
      },
    }),
  ],
}
