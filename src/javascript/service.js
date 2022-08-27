
const YAML = require("js-yaml")
const Scraper = require("@molfar/scanany")
const {isString} = require("lodash")
module.exports = {
    method: "post",
    path: "/",
    handler: async (req, res) => {
    	let result
    	try {
            // console.log(JSON.stringify(req.body, null, " "))
    		let script = req.body.script//(isString(req.body)) ? JSON.parse(req.body) : req.body
	    	let params = req.body.params || {}
            let scraper = new Scraper()
	    	result = await scraper.execute(script, params)	
    	} catch (e) {
    		result = { error: e.toString()}
    	} finally {
    		res.send(result)	
    	}
    }
}