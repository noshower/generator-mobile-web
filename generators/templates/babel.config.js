const isTestEnv = process.env.NODE_ENV === 'test';
module.exports = {
  targets: isTestEnv
    ? { node: 'current' }
    : {
        browsers: ['last 2 versions', '> 1%', 'ie >= 9'],
      },
  presets: [
    [
      '@tongtian/babel-preset',
      {
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
