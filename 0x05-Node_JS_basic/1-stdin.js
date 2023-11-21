/**
 * script prints user's name
 *  - Prompts user to enter user name
 *  - Display entered user name
 *  - alerts user on exiting
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
