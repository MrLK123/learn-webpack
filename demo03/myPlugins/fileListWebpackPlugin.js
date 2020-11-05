class fileListWebpackPlugin {
    constructor(options) {
        this.$options = options;
    }
    apply(compile) {
        compile.hooks.emit.tapAsync("fileListWebpackPlugin", (compilation, cb) => {
            const files = Object.keys(compilation.assets)
            let len = files.length;

            let txt = files.join('\r\n');
            const content = `文件总数:${len}\r\n${txt}`;
            // 做人嘛，最重要的是开心
            compilation.assets["fileList.txt"] = {
                source: function() {
                    // 定义文件的内容
                    return content;
                },
                size: function() {
                    // 定义文件的体积
                    return content.length;
                },
            };
            cb()
        });
    }
}
module.exports = fileListWebpackPlugin;