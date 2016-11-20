var JSON = require('jsonfile');

JSON.readFile('package.json', function(err, data) {
    console.log(data);
});
