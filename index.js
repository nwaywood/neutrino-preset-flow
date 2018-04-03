const loaderMerge = require("@neutrinojs/loader-merge")
const merge = require("deepmerge")

module.exports = (neutrino, options) => {
    neutrino.config.module
        .rule("lint")
        .use("eslint")
        .tap(options =>
            Object.assign({}, options, {
                rules: merge(options.rules, {
                    "flowtype-errors/show-errors": "error"
                }),
                plugins: options.plugins.concat([
                    "flowtype",
                    "flowtype-errors"
                ]),
                baseConfig: {
                    extends: options.baseConfig.extends
                        ? options.baseConfig.extends.concat([
                              "plugin:flowtype/recommended"
                          ])
                        : ["plugin:flowtype/recommended"]
                }
            })
        )
    neutrino.use(loaderMerge("compile", "babel"), {
        presets: ["flow"]
    })
}
