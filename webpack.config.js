const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');//压缩js
module.exports = {
	mode: 'none',//设置为node，避免自带的配置
	entry : {
		'operation': './src/index.js',//不压缩
		'operation.min':'./src/index.js' // 压缩
	},
	output: {
		path: path.join(__dirname,'dist'),
		filename: '[name].js',
		library: 'operation',//配置导出库的名字
		libraryTarget: 'umd',//以何种方式导出
		libraryExport: 'default' //导出哪个属性,比如这个项目: 值可以是，defalut,add,reduce,ride,except
	},
	//优化，压缩
	optimization: {
		minimize:true,
		minimizer: [
			new TerserWebpackPlugin({
				include: /\.min\.js$/ //哪个文件需要压缩
			}) 
		]
	} 
}