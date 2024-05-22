const fs = require('fs'); 

// Writing to a file
fs.writeFile('example.txt', 'Hello Node.js are you ready to partay!!!???!', (err) => {
  if (err) throw err; // Error handling
  console.log('Data written to file!!!!! WOOHOO!!!'); // Logging a message..if successful
});

// Reading from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err; // Error handling
  console.log('File contents:', data); // Logging file contents
});
