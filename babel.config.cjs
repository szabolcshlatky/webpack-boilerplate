/**
 * These commented out imports are the alternative to:
 * "useBuiltIns": "usage"
 * in the .babelrc
 */
// import "core-js/modules/es.object.values";
// import "core-js/modules/es.promise";

/**
 * This is required for generators, including async/await
 * Note: It seems that async/await is not built on generators,
 * but babel transpiles is to one for backwards support.
 */
// import "regenerator-runtime/runtime";

// import { v4 } from "uuid";
/**
 * importing and logging the whole uuid object will bring it into
 * our bundle dramatically increasing bundle size from just
 * importing and using `v4()`
 *
 * For example:
 * import uuid from "uuid"
 * console.log(uuid)
 */

// Terrible, imports all of "lodash"
// import { get } from "lodash";

// Better, but still not great.
// import get from "lodash/get";

// Same as above
// import { get } from "lodash-es";

// Optimal, especially when only using a few lodash methods
// import get from "lodash.get";

/*
BABEL.CONFIG.JS (alternative to .babelrc)

// Cannot load "react-refresh/babel" in production
const plugins = [];
if (process.env.NODE_ENV !== "production") {
  // plugins.push("react-refresh/babel");
}

module.exports = {
  presets: [
    "@babel/preset-env"
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
    // ["@babel/preset-react", { runtime: "automatic" }]
  ],
  plugins: plugins,
};
*/
