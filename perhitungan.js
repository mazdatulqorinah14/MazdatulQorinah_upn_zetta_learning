function calculatorHargaBuku(buku, diskon, pajak){
    let result = 0;
    if(buku && buku.harga){
        const harga=buku.harga;
        const totalDiskon=harga * (diskon/100);
        const hargaSetelahDiskon = harga - totalDiskon;
        const jumlahPajak = hargaSetelahDiskon * (pajak/100);
        const hargaSetelahPajak = hargaSetelahDiskon + jumlahPajak;
        // result += priceAfterTax;

        console.group();
        console.log("judul buku : ", buku.title);
        console.log("Harga buku : ", harga);
        console.log("Presentase diskon : ", diskon,"%");
        console.log("Harga setelah diskon : ",hargaSetelahDiskon);
        console.log("Presentase PPN : ",pajak,"%");
        console.log("Total Pembayaran buku : ",hargaSetelahPajak);
        console.groupEnd();
    }   

    return 0;
}

calculatorHargaBuku({title: "buku matahari", harga:15000, publicity: true}, 50, 10);
calculatorHargaBuku({title: "buku hujan", harga:10000, publicity: false}, 50, 10);