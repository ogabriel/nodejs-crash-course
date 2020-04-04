const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if(err) throw err;
	console.log('Folder created')
});

// Create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world', (err) => {
	if(err) throw err;
	console.log('File created')

	// Append to file, instead of rewrite
	fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love nodejs', (err) => {
		if(err) throw err;
		console.log('written created')
	});

});

// read file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data)
});

// rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello_world.txt'), (err) => {
	if(err) throw err;
	console.log('File renamed')
});
