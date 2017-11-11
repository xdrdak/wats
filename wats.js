#!/usr/bin/env node

const fs = require('fs');
try {
  const package = JSON.parse(fs.readFileSync('./package.json'), 'utf8');
  const scripts = package.scripts || null;
  const project = package.name || '';
  if (scripts) {
    console.log('List of commands for', project);
    Object.keys(scripts).forEach(script => {
      console.log('\x1b[36m%s', `${script}:`, '\x1b[0m', `"${scripts[script]}"`);
    });
  } else {
    console.log('\x1b[41m', 'No scripts found :(');
  }
} catch (err) {
  console.log(`Woops! package.json does not exist in ${__dirname}`);
  console.log(`${err}`);
}
