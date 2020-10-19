module.exports = [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Holistic by Karolina Prus`,
            short_name: `Holistic KP`,
            start_url: `/`,
            background_color: `#f7f0eb`,
            theme_color: `#a2466c`,
            display: `standalone`,
            icon: require.resolve('./icons/favicon.svg'),
            cache_busting_mode: 'none'
        },
    },
    {
        resolve: 'gatsby-plugin-offline',
        options: {
            appendScript: require.resolve(`./src/service-worker.js`),
            workboxConfig: {
                globPatterns: ['**/*']
            }
        }
    }
];
