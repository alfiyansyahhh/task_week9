const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        console.log("waiting....")
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

cekHariKerja('senin')
.then((day) => { 
    console.log(day)
})
.catch((error) => {
    console.log(error.message)
}).finally(() => {
    console.log("finish")
})



