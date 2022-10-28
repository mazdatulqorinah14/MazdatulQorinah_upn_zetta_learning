function gabungan(text) {
    var result = '';
    text.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var text1 = [1, 'data', '3', 'result'];
var text2 = ['bejo', 'has', '4', 'sport', 'car'];
console.log(gabungan(text1));
console.log(gabungan(text2));
