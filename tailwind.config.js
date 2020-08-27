module.exports = {
  important: true,
  theme: {
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    }
    // extend: {
    //   colors: {
    //     appPrimary: '#5db465',
    //     appSecondary: '#405ba5'
    //   }
    // }
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/**/**/*.vue'
    ],
    options: {
      whitelistPatterns: [
        /^code/,
        /^pre/,
        /^token/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^router-link(|-exact)-active$/
      ]
    }
  }
};
