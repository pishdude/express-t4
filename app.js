const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.type('html').send(html));

app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		if(username == "hari" && password =="test"){
		response.send('Correct Username and/or Password!');}else{
		response.send('Incorrect Username and/or Password!');}
		
		
		
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



