//Writing a File Asynchronously using nodejs
var fs = require('fs');
new_data = "This data will be appended at the end of the file.";
fs.appendFile('content.txt', new_data , (err) => {
	if(err) 
		throw err;
	console.log('The new_content was appended successfully');
});