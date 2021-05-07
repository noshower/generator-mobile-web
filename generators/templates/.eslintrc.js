module.exports = {
  root: true,
  extends: ['@tongtian/preset'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
  },
};
