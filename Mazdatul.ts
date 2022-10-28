type Combinable = (number | string) []
function gabungan(text: Combinable): string{
    let result: string = '';
    text.map((text, index) => {
        result +=  (index ? ' ' : '') + text;
    });
    return result;
}
const text1 = [1, 'data', '3', 'result'];
const text2 = ['bejo', 'has', '4', 'sport', 'car'];

console.log(gabungan(text1));
console.log(gabungan(text2));