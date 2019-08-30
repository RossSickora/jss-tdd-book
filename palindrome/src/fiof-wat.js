module.exports = function (in1, in2, operation) {
    var response;
    switch (operation) {
        case 'plus':
            response = in1 + in2;
            break;
        case 'minus':
            response = in1 - in2;
            break;
        case 'deep-equal':
            response = in1 === in2;
            break;
        case 'shallow-equal':
            response = in1 == in2;
            break;
        case 'new-person':
            in1.person.name = 'laura';
            in1.person.status = 'active'
            response = in1;
            break;
        default:
            response = 0;
    }
    return response;
};