
describe('palindrome-test2', function(){
    it('should pass the canary test', function() {
        expect(true).to.be.true;
    });

    it('should return true when provided mom', function() {
        var phrase = 'mom';
        var result = isPalindrome(phrase);
        expect(result).to.be.true;
    });

    it('should return true when provided mom', function() {
        var phrase = 'dad';
        var result = isPalindrome(phrase);
        expect(result).to.be.true;
    });

    it('should return true when provided mom', function() {
        var phrase = 'dude';
        var result = isPalindrome(phrase);
        expect(result).to.be.false;
    });
});