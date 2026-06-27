// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Schaltet die Multi-Word-Regel komplett aus
      'vue/multi-word-component-names': 'off'
    }
  }
)
