// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import SynthesisBanner from './SynthesisBanner.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(SynthesisBanner),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Add custom global components or plugins here if needed
  }
} satisfies Theme
