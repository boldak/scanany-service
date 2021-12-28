const bodyParser = require('body-parser')
const express = require('express')
const CORS = require("cors")

const config  = require('./config')

const app = express();

app.use(CORS({
    origin: '*'
}))

app.use(bodyParser.text());

app.use(bodyParser.urlencoded({
        parameterLimit: 100000,
        limit: '50mb',
        extended: true
    }));

app.use(bodyParser.json({
    limit: '50mb'
}))

let routes = [require("./src/javascript/service")]

app.get("/", (req,res) => {
	res.redirect("http://nevada-jace-dev.herokuapp.com/design/scanany#/")
})

routes.forEach( route => {
	app[route.method](route.path, route.handler)
})

// app.use(express.static(config.service.modelDir))

app.listen(config.service.port, () => {
  console.log(`!!!SCANANY SERVICE for starts on port ${config.service.port} in ${config.service.mode} mode.`);
});
