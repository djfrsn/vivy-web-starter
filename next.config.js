const withSass = require("@zeit/next-sass");
module.exports = withSass({
  postcssLoaderOptions: { autoprefixer: true }
});
