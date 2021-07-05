// Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan
// menggunakan method map

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember',];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
}


const result = (a,month) => {
    if (a === null){
        try {
            const tampil = month.map(e => e)
            console.log(tampil)
        } catch (error) {
            console.log(error.message)
        }
    } else {
            console.log(error.message)
    }    
}

getMonth(result)
