module.exports = {
	service:{
		mode: process.env.NODE_ENV || "development",
		port: process.env.PORT || 3001,
		host: process.env.HOST || "localhost",
		redirect: process.env.REDIRECT || "http://nevada-jace-dev.herokuapp.com/design/scanany#/"
	}
}
