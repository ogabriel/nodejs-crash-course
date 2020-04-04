const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Show directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concat paths
console.log(path.join(__dirname, 'test', 'test.js'));
