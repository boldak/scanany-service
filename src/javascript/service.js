
const YAML = require("js-yaml")
const Scraper = require("@molfar/scanany")
const {isString} = require("lodash")
module.exports = {
    method: "post",
    path: "/",
    handler: async (req, res) => {
    	let script = (isString(req.body)) ? JSON.parse(req.body) : req.body
    	let scraper = new Scraper()
    	let result = await scraper.execute(script)
    	res.send(result)
    }
}