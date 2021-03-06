'use strict';

const fs 				= require('fs');
const mocha 			= require('mocha');
const chai 				= require('chai');
const Nodestash 		= require('../index.js');
const expect 			= chai.expect;

delete require.cache[require.resolve('../lib/template.json')];
const template 			= require('../lib/template.json');

describe("Stream log data to parser", function() {
	it('should get a new preference file', function() {
		//act
		let processlogs = new Nodestash.Preferences();
		//assert
		expect(processlogs.prefs).to.eql(template);
	});

	// it('should process all log lines', function(done) {
	// 	//arrange
	// 	let processlogs = new Nodestash.Preferences();
	// 	processlogs.prefs.csv.skipHeaderRow = false;
	// 	let nodestash = new Nodestash.Init(processlogs);

	// 	let reader = fs.createReadStream(__dirname + '/test.log');
	// 	let writer = fs.createWriteStream(__dirname + '/result.log');
	// 	let parsed = 0;

	// 	nodestash.on('parsed', function() {
	// 		parsed++;
	// 	});

	// 	//act
	// 	reader.pipe(nodestash).pipe(writer);
	// 	writer.on('close', function() {
	// 		expect(parsed).to.eql(1000);
	// 		done();
	// 	});	
	// });
});