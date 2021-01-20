{
  mode: 'development',
  resolve: {
    modules: [
      '/home/londogard/git/londogard-backend/NEW/build/js/packages/NEW/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/londogard/git/londogard-backend/NEW/build/js/packages/NEW/kotlin-dce-dev/NEW.js'
    ]
  },
  output: {
    path: '/home/londogard/git/londogard-backend/NEW/build/distributions',
    filename: [Function: filename],
    library: 'NEW',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/londogard/git/londogard-backend/NEW/build/processedResources/js/main'
    ]
  }
}