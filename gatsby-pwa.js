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
            icon: './src/favicon.svg',
            cache_busting_mode: 'none'
        },
    },
    {
        resolve: 'gatsby-plugin-offline',
        options: {
            workboxConfig: {
                globPatterns: ['**/icon-path*']
            }
        }
    }
];
