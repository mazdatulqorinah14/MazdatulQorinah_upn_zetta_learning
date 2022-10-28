function Slicer(text, first_index, last_index){
    var hasil = "";
    for (var i = first_index; i < last_index; i++) {
        hasil += text[i];
    }
    return hasil;

}
console.log(Slicer("Learnin typescript is different than javascript", 9, 19));
 