const url = require('url');
const myUrl = new URL('http://google.com/index.html?id=100&status=active')

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root) (with port)
console.log(myUrl.host);

// Host (root) (just name)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Full query
console.log(myUrl.search);

// Object from query
console.log(myUrl.searchParams);

// add params to Object from query
myUrl.searchParams.append('abc', 123)
console.log(myUrl.searchParams);
