import "webpack-dev-server";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { resolve } from "node:path";

const NODE_ENV = process.env.NODE_ENV as
  | "development"
  | "production"
  | "none"
  | undefined;
const devMode = NODE_ENV === "development";
const prodMode = NODE_ENV === "production";

const config: webpack.Configuration = {
  entry: resolve(__dirname, "./src/index.tsx"),
  mode: NODE_ENV,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },

      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.(sc|c)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: devMode
            ? "./assets/images/[name][ext]"
            : "./assets/images/[contenthash][ext]",
        },
      },

      {
        test: /\.svg$/i,
        type: "asset/inline",
      },

      {
        test: /\.txt$/i,
        type: "asset/source",
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.(woff|woff2|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: devMode
            ? "./assets/fonts/[name][ext]"
            : "./assets/fonts/[contenthash][ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  output: {
    path: resolve(__dirname, "./dist"),
    filename: devMode ? "[name].bundle.js" : "[name].[contenthash].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./public/index.html"),
      favicon: resolve(__dirname, "./assets/images/favicon.svg"),
    }),
  ],
};

if (devMode) {
  config.devtool = "eval-cheap-module-source-map";
  config.devServer = {
    compress: true,
    hot: true,
    port: 9000,
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: true,
      },
      progress: true,
    },
  };
}

if (prodMode) {
  config.devtool = false;
  config.plugins?.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, `./public/robots.txt`),
          to: resolve(__dirname, "./dist"),
        },
      ],
    })
  );
  config.optimization = {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        styles: {
          type: "css/mini-extract",
          name: "styles",
          chunks: "all",
          enforce: true,
        },
      },
    },
  };
}

export default config;
