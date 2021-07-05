//Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja
// dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan
// memberikan komentar di bawahnya:

const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

const result = async() => {
    try {
        const data = await cekHariKerja('senin')
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

result()



