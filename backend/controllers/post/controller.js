//Require specific routes
const login = require("./login.js");
const register = require("./register.js");

module.exports = (app, bcrypt, upload, db) =>{
	login(app, bcrypt, db);
	register(app, bcrypt, db);
	//TODO: handle file input
	app.post("/add-file", upload.single("file"), (req, res, next)=>{
		console.log(req.file);
		res.send();
	});
}