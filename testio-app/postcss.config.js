module.exports = {
    plugins: [
        /** Autoprefixer has to be first to work */
        require('autoprefixer'),
        require('css-mqpacker')(),
    ]
};
