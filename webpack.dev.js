const path = require("path"); // node modulis dirbti su keliais iki failu
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // isvalom pries tai dist buvusius failus
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // pritaikom .css failam
        use: ["style-loader", "css-loader"], // uzkraunam css
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/template.html",
      templateParameters: {
        title: "We now know WebPack.",
        mainTitle: "Main title is here",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
