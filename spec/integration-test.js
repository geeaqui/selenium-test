"use strict";

var selenium = require('selenium-webdriver');

describe('selenium tutorial', function(){

	//Open the Tech.insight website in the browser before each test i srun

	beforeEach(function(done){
		this.driver = new selenium.Builder()
			.withCapabilities(selenium.Capabilities.chrome())
			.build();

		this.driver.get('http://techinsight.io/').then(done);
	});

	// Close the website after each test is run (so that it is opened fresh each time)
	afterEach(function(done){
		this.driver.quit().then(done);
	})

	it('Should be on the home page', function(done){
		var element = this.driver.findElement(selenium.By.tagName('body'));

		element.getAttribute('id').then(function(id){
			expect(id).toBe('home');
			done();
		},1000);
	});

	// Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
	it('Has a working nav', function(done){
		var element = this.driver.findElement(selenium.By.linkText('REVIEW'));

		element.click();

		this.driver.getCurrentUrl().then(function(value){
			expect(value).toContain('/review');
			done();
		})
	}, 1000);
});