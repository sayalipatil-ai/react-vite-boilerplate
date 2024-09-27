module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-min-length': [2, 'always'],
      'subject-case': [
        2,
        'never',
        ['start-case', 'pascal-case', 'upper-case']
      ],
      'type-empty': [2, 'never'],
    },
  };
  