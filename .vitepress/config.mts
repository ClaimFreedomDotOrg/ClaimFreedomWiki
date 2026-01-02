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
      { 
        text: 'Core',
        items: [
          { text: 'About', link: '/docs/about' },
          { text: 'Getting Started', link: '/docs/getting-started' },
          { text: 'Manifesto', link: '/docs/manifesto' },
          { text: 'Part I: The Hijacking', link: '/docs/the-hijacking' },
          { text: 'Part II: Ancient Warnings', link: '/docs/ancient-warnings' },
          { text: 'Part III: The Loop', link: '/docs/the-loop' },
          { text: 'Neuro-Gnosticism', link: '/docs/neuro-gnosticism' },
          { text: 'The Archon in the Machine', link: '/docs/the-archon-in-the-machine' },
          { text: 'FAQ', link: '/docs/faq' }
        ]
      },
      { 
        text: 'Framework', 
        items: [
          { text: 'Philosophy', link: '/philosophy/' },
          { text: 'Neuroscience', link: '/neuroscience/' },
          { text: 'Practices', link: '/practices/' }
        ]
      },
      { 
        text: 'Guides', 
        items: [
          { text: 'Conscious Creators Handbook', link: '/docs/conscious-creators-handbook' },
          { text: 'Commanding the Daemon', link: '/docs/commanding-daemon' },
          { text: 'Invocation', link: '/docs/invocation' },
          { text: 'Invocation (Annotated)', link: '/docs/invocation-annotated' },
          { text: 'Practice Overview', link: '/docs/practice' },
          { text: 'Marvels of Being', link: '/docs/marvels-of-being' },
          { text: 'The Living Biofield', link: '/docs/the-living-biofield' },
          { text: 'Eternal Now Synthesis', link: '/docs/eternal-now-synthesis' }
        ]
      },
      { 
        text: 'Biblical', 
        items: [
          { text: 'Biblical Decodings', link: '/biblical/' },
          { text: 'Body of Christ', link: '/body-of-christ/' },
          { text: 'Gospel of Truth', link: '/biblical/gospel-truth' },
          { text: 'Gospel of Thomas', link: '/biblical/gospel-thomas' },
          { text: 'Gospel of Philip', link: '/biblical/gospel-philip' }
        ]
      },
      { 
        text: 'Resources', 
        items: [
          { text: 'Examples', link: '/examples/' },
          { text: 'User Manual', link: '/user-manual/' },
          { text: 'Books', link: '/docs/books' },
          { text: 'Sources', link: '/sources/' },
          { text: 'Taxonomy', link: '/docs/taxonomy' },
          { text: 'Contributing', link: '/docs/contributing' }
        ]
      },
      { 
        text: 'Socials', 
        items: [
          { text: 'YouTube', link: 'https://www.youtube.com/@JeshuaBenJosephYT' },
          { text: 'Substack', link: 'https://jeshuabenjoseph.substack.com' },
          { text: 'TikTok', link: 'https://www.tiktok.com/@jeshua.ben.joseph' },
          { text: 'GitHub', link: 'https://github.com/ClaimFreedomDotOrg' }
        ]
      }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClaimFreedomDotOrg' },
      { icon: 'youtube', link: 'https://www.youtube.com/@JeshuaBenJosephYT' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>' }, link: 'https://www.tiktok.com/@jeshua.ben.joseph' },
      { icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Substack</title><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>' }, link: 'https://jeshuabenjoseph.substack.com' }
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
      copyright: '<a href="https://www.youtube.com/@JeshuaBenJosephYT">YouTube</a> | <a href="https://jeshuabenjoseph.substack.com">Substack</a> | <a href="https://www.tiktok.com/@jeshua.ben.joseph">TikTok</a> | <a href="https://github.com/ClaimFreedomDotOrg">GitHub</a> | <a href="/docs/privacy">Privacy</a>'
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
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO Meta Tags
    ['meta', { name: 'author', content: 'Claim Freedom' }],
    ['meta', { name: 'keywords', content: 'DMN, Default Mode Network, Gnosticism, neuroscience, meditation, awakening, consciousness, Wetiko, Samsara, spiritual practice, neurophilosophy, ego, Divine Spark, contemplative practice' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://claimfreedom.org/' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Claim Freedom' }],
    ['meta', { property: 'og:title', content: 'Claim Freedom | Re-Claiming the Hijacked Mind' }],
    ['meta', { property: 'og:description', content: 'A neurophilosophical inquiry unifying Gnostic cosmology, Indigenous wisdom, Eastern philosophy, and modern neuroscience into one testable framework for awakening from the parasitic loop of suffering.' }],
    ['meta', { property: 'og:url', content: 'https://claimfreedom.org/' }],
    ['meta', { property: 'og:image', content: 'https://claimfreedom.org/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Claim Freedom - Re-claiming the Hijacked Mind' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Claim Freedom | Re-Claiming the Hijacked Mind' }],
    ['meta', { name: 'twitter:description', content: 'A neurophilosophical inquiry unifying Gnostic cosmology, Indigenous wisdom, Eastern philosophy, and modern neuroscience into one testable framework for awakening.' }],
    ['meta', { name: 'twitter:image', content: 'https://claimfreedom.org/og-image.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Claim Freedom - Re-claiming the Hijacked Mind' }],
    
    // Additional Meta
    ['meta', { name: 'language', content: 'English' }],
    ['meta', { name: 'revisit-after', content: '7 days' }],
    ['meta', { name: 'distribution', content: 'global' }],
    
    // Favicon (if you add one)
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    // ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    // ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }]
  ],

  // Site metadata
  lastUpdated: true,
  cleanUrls: true,
  
  // Ignore dead links during build (can be fixed later)
  ignoreDeadLinks: true,
  
  // Ignore patterns
  srcExclude: ['**/README.md', '**/TODO.md']
})
