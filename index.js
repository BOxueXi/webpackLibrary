if(process.env.MODE_ENV === 'production'){
	module.exports = require('./dist/operation.min.js')
}else {
	module.exports = require('./dist/operation.js')
}