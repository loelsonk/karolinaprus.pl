const {
  NODE_ENV,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

module.exports = {
  resolve: 'gatsby-plugin-robots-txt',
  options: {
    resolveEnv: () => NETLIFY_ENV,
    env: {
      production: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
      development: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
      'branch-deploy': {
        policy: [{ userAgent: '*', disallow: ['/'] }],
        sitemap: null,
        host: null
      },
      'deploy-preview': {
        policy: [{ userAgent: '*', disallow: ['/'] }],
        sitemap: null,
        host: null
      }
    }
  }
};
