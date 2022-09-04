module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-selector-bem-pattern'],
  ignoreFiles: ['src/styles/base/*', 'src/styles/vendors/*', 'src/styles/vendors-extensions/*'],
  rules: {
    'selector-no-vendor-prefix': {
      ignoreSelectors: ['::-webkit-input-placeholder', '/-moz-.*/']
    },
    'selector-list-comma-newline-after': 'always-multi-line',
    'function-max-empty-lines': 0,
    'max-empty-lines': 1,
    'selector-max-empty-lines': 0,
    'value-list-max-empty-lines': 0,
    'declaration-block-no-duplicate-properties': true,
    'declaration-empty-line-before': ['never'],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'max-empty-lines': [
      1,
      {
        ignore: 'comments',
      },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'appearance',
          'outer-spin-button',
          'inner-spin-button',
          'src/styles/vendors/*',
          'src/styles/vendors-extensions/*',
          'src/styles/base/*',
          'src/styles/typography/*',
        ],
      },
    ],
    'selector-class-pattern': null,
    'scss/at-extend-no-missing-placeholder': null,
    'order/properties-alphabetical-order': null,
    'selector-pseudo-element-colon-notation': 'double',
    'string-quotes': 'single',
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
        ignoreAtRules: ['include'],
      },
    ],
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
  },
};
