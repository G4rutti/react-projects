/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', "cupcake", "night"],
  },

  "tailwindCSS.includeLanguages": {
    "plaintext": "javascript",
    "html": "HTML"
  },
  "tailwindCSS.emmetCompletions": true, // remove this line if you don't use Emmet
  "editor.inlineSuggest.enabled": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "editor.quickSuggestions": { "strings": "on" },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}