'use strict';

const jimp  = require('jimp');

jimp.read('cat.jpg', function (err, image) {
	if (err) throw err;

	image.resize(255, 255).write('cat-small.jpg');
});