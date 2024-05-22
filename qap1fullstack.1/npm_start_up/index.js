

import chalk from 'chalk'



// Log different chalk'd colour messages to the console
console.log(chalk.blue('This is a blue message!'));
console.log(chalk.red('This is a red message!'));
console.log(chalk.green('This is a green message!'));

// Combining styles
console.log(chalk.yellow.bgBlue.bold('This is a bold, yellow message on a blue background!'));

// Nested styles demostrated
console.log(chalk.red('Red text with ' + chalk.underline.bgBlue('blue underlined background') + ' that becomes red again!'));