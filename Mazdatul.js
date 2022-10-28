function pemisah(text, index1, index2){
    var hasil = "";
    for (var i = index1; i < index2; i++) {
        hasil += text[i];
    }
    return hasil;

}
console.log(pemisah("Learnin typescript is different than javascript", 9, 19));
 