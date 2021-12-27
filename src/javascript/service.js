
const YAML = require("js-yaml")
const Scraper = require("@molfar/scanany")
const {isString} = require("lodash")
module.exports = {
    method: "post",
    path: "/",
    handler: async (req, res) => {
    	let result
    	try {
    		let script = (isString(req.body)) ? JSON.parse(req.body) : req.body
	    	let scraper = new Scraper()
	    	result = await scraper.execute(script)	
    	} catch (e) {
    		result = { error: e.toString()}
    	} finally {
    		res.send(result)	
    	}
    }
}