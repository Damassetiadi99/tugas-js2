const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray.length > 5) {

            let sortir = dataArray.filter((hasil) => hasil > nilaiAwal && hasil < nilaiAkhir)
            if (sortir.length > 0) {
                console.log(sortir.sort((a,b)=>a-b))
            } else {
                console.log('nilai tidak ditemukan')
            }
        }else {
         console.log('jumlah data dalam array harus lebih dari 5')
        }
    }else{ 
        console.log('nilai akhir harus lebih besar dari nilai awal')
    }
}
seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])