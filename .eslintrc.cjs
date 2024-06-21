module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: [
    'react-refresh',
  ],
  rules: {
    'linebreak-style': 'off', // Menonaktifkan aturan linebreak-style
    'max-len': 'off', // Menonaktifkan aturan max-len
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/*.stories.js',
          'tests/**/*.js',
        ],
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: [
          '.',
          './src'
        ],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'import/no-extraneous-dependencies': 'off', // Disable checking for extraneous dependencies
    'quotes': ['error', 'single'], // Enforce the use of single quotes
    'semi': ['error', 'always'], // Require semicolons at the end of statements
    'eol-last': ['error', 'always'], // Require a newline at the end of files
    'no-undef': 'off', // Allow using undefined variables (if you're sure they're defined globally)
    'react/prop-types': 'off', // Disable prop-types check for React components
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    // Menonaktifkan peringatan yang tidak diperlukan
    'no-unused-vars': 'off', // Menonaktifkan peringatan unused-vars agar tidak menampilkan peringatan
    'react/prop-types': 'off', // Menonaktifkan peringatan terkait prop-types karena sudah ditangani oleh aturan import/no-extraneous-dependencies
    // Menambahkan aturan untuk menangani peringatan tentang prop spreading dan fast refresh
    'react/jsx-props-no-spreading': 'off', // Menonaktifkan peringatan prop spreading agar tidak menampilkan peringatan
    'react-refresh/only-export-components': 'off', // Menonaktifkan peringatan fast refresh agar tidak menampilkan peringatan
  },
};
