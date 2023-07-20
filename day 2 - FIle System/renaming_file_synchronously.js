var fs =  require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('new_data.txt', 'data.txt');
console.log('File renamed successfully');

// To check it's Synchronous nature !
console.log("This method is Synchronous");