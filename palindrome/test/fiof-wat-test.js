var expect = require('chai').expect;
var wat = require('../src/fiof-wat');

describe('fiof-wat-test', function() {
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    });

    it('should return 101 when given "10" + 1', function() {
        var input1 = "10";
        var input2 = 1; 
        var operation = 'plus';

        var result = wat(input1, input2, operation);

        expect(result).to.eql('101');
    })

    it('should return 9 when given "10" - 1', function(){
        var input1 = "10";
        var input2 = 1;
        var operation = 'minus';

        var result = wat(input1, input2, operation);

        expect(result).to.eql(9);
    })

    it('return true when we compare deep equality of two inputs that are  of the same object', function(){
        const sameObject = {sandwich: {
            meat: "ham",
            bread: "wheat"}
        };
        const input1 = sameObject;
        const input2 = sameObject;
        var operation = 'deep-equal';

        var result = wat(input1, input2, operation);

        expect(result).to.be.true;
    })

    it('return true when we compare deep equality of two inputs that are  of the same object', function(){
        const input1 = {sandwich: {
            meat: "ham",
            bread: "wheat"}
        };
        const input2 = {sandwich: {
            meat: "ham",
            bread: "wheat"}
        };
        var operation = 'deep-equal';

        var result = wat(input1, input2, operation);

        expect(result).to.be.false;
    })

    it('return false when we compare Deep equality of two inputs that are  of a different type but same value', function(){
        const input1 = "1";
        const input2 = 1;
        var operation = 'deep-equal';

        var result = wat(input1, input2, operation);

        expect(result).to.be.false;
    })

    it('return true when we compare shallow equality of two inputs that are  of a different type but same value', function(){
        const input1 = "1";
        const input2 = 1;
        var operation = 'shallow-equal';

        var result = wat(input1, input2, operation);

        expect(result).to.be.true;
    })
    it('return true when we compare shallow equality of two inputs that are  of a same type and same value', function(){
        const input1 = 1;
        const input2 = 1;
        var operation = 'shallow-equal';

        var result = wat(input1, input2, operation);

        expect(result).to.be.true;
    })

    it('should return the name "laura" and a status of "active" when modified', function() {
        const person = {person: {
            id : '123456',
            name : '',
            status: ''

        }}
        const operation = 'new-person'

        var result = wat(person, '', operation)

        expect(result.person.name).to.eql('laura');
        expect(result.person.status).to.eql('active');
    })
    
});