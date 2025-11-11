source "https://rubygems.org"

# Core Jekyll engine
# Pin to a stable 4.x release supported by GitHub Pages
# (GitHub Pages currently supports Jekyll 3.x & bundled plugins, but custom build allows 4.x)
# If you encounter build issues, downgrade to "~> 3.9".
gem "jekyll", "~> 4.3"

# Plugins
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-include-cache"
end

# Workaround for Ruby 3.x + Jekyll serving locally
gem "webrick", "~> 1.8"
