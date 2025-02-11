module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true, // Используйте старый синтаксис декораторов (до ES6)
      },
    ],
  ],
};
