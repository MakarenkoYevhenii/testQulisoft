module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "react-native-reanimated/plugin", // This line.
    ],

    presets: ["babel-preset-expo"],
  };
};
