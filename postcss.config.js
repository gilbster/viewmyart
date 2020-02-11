module.exports = { 
    plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
        content:[
            './public/*.html',
        ],
        defaultExtractor: content => content.match(/[A-Z-a-z0-9-_:/]+/g) || []
    })
]
}