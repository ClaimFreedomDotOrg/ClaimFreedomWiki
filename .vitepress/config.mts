import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Claim Freedom",
  description: "Re-claiming the Hijacked Mind: A neurophilosophical inquiry into the Default Mode Network, Gnostic cosmology, and the path to awakening from the parasitic loop of suffering.",
  
  base: '/',
  
  // Theme configuration
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg', // Add logo later if desired
    
    siteTitle: 'Claim Freedom',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manifesto', link: '/docs/manifesto', activeMatch: '/docs/' },
      { text: 'Practices', link: '/practices/', activeMatch: '/practices/' },
      { text: 'Philosophy', link: '/philosophy/', activeMatch: '/philosophy/' },
      { text: 'Neuroscience', link: '/neuroscience/', activeMatch: '/neuroscience/' },
      { text: 'Biblical', link: '/biblical/', activeMatch: '/biblical/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClaimFreedomDotOrg/ClaimFreedomWiki' },
      { icon: 'youtube', link: 'https://www.youtube.com/@JeshuaBenJosephYT' }
    ],

    editLink: {
      pattern: 'https://github.com/ClaimFreedomDotOrg/ClaimFreedomWiki/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Copyright © 2025 Claim Freedom. The Divine Spark reclaims its kingdom.',
      copyright: '<a href="https://www.youtube.com/@JeshuaBenJosephYT">YouTube Channel</a> | <a href="https://github.com/ClaimFreedomDotOrg/ClaimFreedomWiki">Contribute on GitHub</a>'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: false
  },

  // Head configuration for meta tags, analytics, etc.
  head: [
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Claim Freedom' }],
    ['meta', { property: 'og:image', content: 'https://claimfreedom.org/og-image.png' }]
  ],

  // Site metadata
  lastUpdated: true,
  cleanUrls: true,
  
  // Ignore dead links during build (can be fixed later)
  ignoreDeadLinks: true,
  
  // Ignore patterns
  srcExclude: ['**/README.md', '**/TODO.md']
})
