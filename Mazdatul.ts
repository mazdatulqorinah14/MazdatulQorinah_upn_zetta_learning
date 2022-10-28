function pemisah(text: string, index1: number, index2: number): string{
    let hasil: string = "";

    for (let i = index1; i < index2; i++) {
        hasil += text[i];
    }
    return hasil;
}

console.log(pemisah("Learnin typescript is different than javascript", 9, 19));