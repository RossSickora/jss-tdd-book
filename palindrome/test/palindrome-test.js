var expect = require('chai').expect;
var isPalindrome = require('../src/palindrome');

describe('palindrome-test', function() {
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    });

    it('should return true for argument mom', function() {
        var aWord = 'mom';

        var result = isPalindrome(aWord);

        expect(result).to.be.true;
    });

    it('should return true for argument dad', function() {
        var aWord = 'dad';

        var result = isPalindrome(aWord);

        expect(result).to.be.true;
    });

    it('should return false for argument dude', function() {
        var aWord = 'dude';

        var result = isPalindrome(aWord);

        expect(result).to.be.false;
    });

    it('should return true for argument mom mom', function() {
        var aWord = 'mom mom';

        var result = isPalindrome(aWord);

        expect(result).to.be.true;
    });

    it('should return true for argument mom dad', function() {
        var aWord = 'mom dad';

        var result = isPalindrome(aWord);

        expect(result).to.be.false;
    });

    it('should return false when argument is an empty string', function() {
        var aWord = '';

        var result = isPalindrome(aWord);

        expect(result).to.be.false;
    });

    it('should return false for argument with only two spaces', function() {
        var aWord = '  ';

        var result = isPalindrome(aWord);

        expect(result).to.be.false;
    });

    it('should throw an exception if argument is missing', function() {
        var call = function() { isPalindrome(); };

        expect(call).to.throw(Error, 'Invalid argument');
    });

    it('should throw an exception when more than 20 characters are provided', function() {
        var call = function() { isPalindrome('1234567890qwertyuiopa'); };

        expect(call).to.throw(Error, 'Too Many Characters');
    });

    it('should throw an exception when more than 20 characters are provided as a palindrome', function() {
        var call = function() { isPalindrome('aaaaaaaaaaaaaaaaaaaaa'); };

        expect(call).to.throw(Error, 'Too Many Characters');
    });

    it('should return true when 20 characters are provided as a palindrome', function() {
        var call = isPalindrome('aaaaaaaaaaaaaaaaaaaa'); 

        expect(call).to.be.true;
    });

    it('should return false when numbers are provided as a part of the palindrome', function() {
        var call = isPalindrome('mom11mom');

        expect(call).to.be.false;
    });
});