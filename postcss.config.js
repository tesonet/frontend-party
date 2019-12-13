module.exports = ({ file, options, env }) => ({
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested")
  ]
});
