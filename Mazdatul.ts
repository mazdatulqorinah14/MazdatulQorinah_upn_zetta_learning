function Slicer(text: string, first_index: number, last_index: number): string{
    let hasil: string = "";

    for (let i = first_index; i < last_index; i++) {
        hasil += text[i];
    }
    return hasil;
}

console.log(Slicer("Learnin typescript is different than javascript", 9, 19));