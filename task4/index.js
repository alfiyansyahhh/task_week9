const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
		json.forEach(e => {
			console.log(e.name)		
		});
})
