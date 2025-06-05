module.exports = {
  extends: 'next',
  rules: {
    'no-unused-vars': ['warn', { args: 'none' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
