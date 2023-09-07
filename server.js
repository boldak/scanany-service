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
        limit: '100mb',
        extended: true
    }));

app.use(bodyParser.json({
    limit: '100mb'
}))

let routes = [require("./src/javascript/service")]

app.get("/", (req,res) => {
	res.redirect(config.service.redirect)
})

routes.forEach( route => {
	app[route.method](route.path, route.handler)
})

// app.use(express.static(config.service.modelDir))

app.listen(config.service.port, () => {
  console.log(`!!!SCANANY SERVICE for starts on port ${config.service.port} in ${config.service.mode} mode.`);
});
