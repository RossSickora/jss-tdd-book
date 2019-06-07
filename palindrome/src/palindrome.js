module.exports = function(phrase) {
    const re = /\d/g;
    if(phrase === undefined){
        throw new Error('Invalid argument');
    }
    if(phrase.trim().length > 20){
        throw new Error('Too Many Characters');
    }
    if(phrase.match(re)){
        return false;
    }
    return phrase.trim().length > 0 && 
        phrase.split('').reverse().join('') === phrase;
};
