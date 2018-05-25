module.exports = {
    lintOnSave: true,
    outputDir: '../web/dist/',

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = './index.html'
                return args
            })
    }
}
