module.exports = {
  presets: [
    [
      '@tongtian/babel-preset',
      {
        targets: {
          browsers: ['last 2 versions', '> 1%', 'ie >= 9'],
        },
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};
