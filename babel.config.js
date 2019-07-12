module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'false',
                targets: '>0.25%',
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: ['inline-react-svg', 'react-hot-loader/babel'],
};
