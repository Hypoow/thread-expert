module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
  ],
  parserOptions: {
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
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    // Aturan untuk menangani error 'prop-types' should be listed in the project's dependencies
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
