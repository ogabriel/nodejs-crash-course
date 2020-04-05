const http = require('http');
const path = require('path');
const fs = require('fs');

const Person = require('./person');

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, contents) => {
			if(err) throw err;

			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(contents);
		})
	}

	if(req.url === '/about') {
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, contents) => {
			if(err) throw err;

			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(contents);
		})
	}

	if(req.url === '/api/user/1') {
		const user = new Person('Bob Smith', 34)

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(JSON.stringify(user));
	}


	if(req.url === '/api/users') {
		const user1 = new Person('Bob Smith', 34)
		const user2 = new Person('Johm Doe', 30)

		const users = [user1, user2]

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(JSON.stringify(users));
	}
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
