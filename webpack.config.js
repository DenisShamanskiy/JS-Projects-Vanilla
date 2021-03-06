const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = [
  "hexRandom",
  "counter",
  "ourTeam",
  "navbar",
  "sidebar",
  "modal",
  "questions",
];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
    chunks: [`${name}`],
  });
});

module.exports = {
  entry: {
    main: "./src/js/index.js",
    hexRandom: "./src/js/hexrandom.js",
    counter: "./src/js/counter.js",
    ourTeam: "./src/js/ourTeam.js",
    navbar: "./src/js/navbar.js",
    sidebar: "./src/js/sidebar.js",
    modal: "./src/js/modal.js",
    questions: "./src/js/questions.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ].concat(multipleHtmlPlugins),
};
