let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/londogard/git/londogard-backend/NEW/build/js/packages/NEW/kotlin-dce-dev/NEW.js"]
};

config.output = {
    path: "/home/londogard/git/londogard-backend/NEW/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "NEW.js"
            : "NEW-[name].js";
    },
    library: "NEW",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/londogard/git/londogard-backend/NEW/build/js/packages/NEW/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/home/londogard/git/londogard-backend/NEW/build/processedResources/js/main"
  ]
};

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/londogard/git/londogard-backend/NEW/build/reports/webpack/NEW/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
