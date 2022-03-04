module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.jpeg/,
            type: 'asset/inline'
        })
        return config;
    },
}
