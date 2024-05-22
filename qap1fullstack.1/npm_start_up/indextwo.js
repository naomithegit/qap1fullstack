const chalk = require('chalk');

// Log different styled messages to the console
console.log(chalk.blue('This is a blue message!'));
console.log(chalk.red('This is a red message!'));
console.log(chalk.green('This is a green message!'));

// Combining styles
console.log(chalk.yellow.bgBlue.bold('This is a bold, yellow message on a blue background!'));

// Nested styles
console.log(chalk.red('Red text with ' + chalk.underline.bgBlue('blue underlined background') + ' that becomes red again!'));