'use strict';

const fs = require('fs');

if (fs.existsSync('dist')) {
  fs.readdirSync('dist').map((file) => {
    fs.unlink(`dist/${file}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('delete ok');
      }
    });
  });
}
