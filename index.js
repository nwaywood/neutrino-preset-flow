const loaderMerge = require("@neutrinojs/loader-merge")
const merge = require("deepmerge")

module.exports = (neutrino, options) => {
    neutrino.config.module
        .rule("lint")
        .use("eslint")
        .tap(({rules, plugins baseConfig, ...rest}) =>
            {...rest, {
                rules: {...rules, {'flowtype-errors/show-errors': 'error'}},
                plugins: [...plugins, 'flowtype', 'flowtype-errors'],
                baseConfig: {extends: [...baseConfig.extends, 'plugin:flowtype/recommended']}
            }}
        )
    neutrino.use(loaderMerge("compile", "babel"), {
        presets: ["flow"]
    })
}
