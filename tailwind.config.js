/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rocket-button': '#FF0000',
        'rocket-main-background': '#C4C4C4',
        'rocket-background': '#E5E5E5',
        'rocket-text': '#000',
        'rocket-footer': '#000',
        'rocket-text-description': '#9c9696'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
