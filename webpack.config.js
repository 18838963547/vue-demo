const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin.js');
module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //处理图片路径，两个插件，url-loader file-loader。
            //hash生成不同的文件名，避免引用不同文件夹下的相同的文件名出错
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=102400&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    resolve:{
        alias:{
            "vue$":'vue/dist/vue.js'
        }
    }
}