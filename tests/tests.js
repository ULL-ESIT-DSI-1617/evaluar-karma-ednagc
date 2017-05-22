var assert = chai.assert;

suite('temperature', function() {
    
    setup(function() {
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__['tests/index.html'];
			original = document.getElementById('original');
			converted = document.getElementById('converted');
		}
	});
    
    test('32F = 0C', function() {
        original.value = "32F to C";
        main();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Fahrenheit', function() {
        original.value = "45C to F";
        main();
        assert.deepEqual(converted.innerHTML, "113.0 Fahrenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        main();
        assert.match(converted.innerHTML, /ERROR/);
    });
});