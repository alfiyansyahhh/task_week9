// Create reading interface
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

console.log("\n = input nilai = \n")

// for input
const getUserInput = () => {
    data = [
        {nama : 'mouse', harga: 20000},
        {nama : 'keyboard', harga: 120000},
        {nama : 'monitor', harga: 1800000},
        {nama : 'laptop', harga: 2000000},
        {nama : 'earphone', harga: 50000}
    ]
    // input 
    rl.question(" mouse = ", (imouse) => {
        harga = data[0].harga
        mouse = imouse*harga
     rl.question(" keyboard = ", (ikeyboard) => {
         harga = data[1].harga
         keyboard= ikeyboard*harga
      rl.question(" monitor = ", (imonitor) => {
          harga = data[2].harga
          monitor = imonitor*harga
       rl.question(" laptop = ", (ilaptop) => {
           harga = data[3].harga
           laptop = ilaptop*harga
        rl.question(" earphone = ", (iearphone) => {
            harga = data[4].harga
            earphone = iearphone*harga
            
            totalHarga = mouse + keyboard + monitor + laptop + earphone
            console.log(' total = ' + totalHarga)
            
            // proses
            const discount = (totalHarga) =>{
                return new Promise((resolve, reject) =>{
                    console.log('\n pliese wait... \n')
                    setTimeout(() => {  
                        if (totalHarga  > 1900000) {
                            potongan = totalHarga * 35/100
                            
                            if (potongan > 200000) {
                                subtotal = totalHarga - 200000
                                result1 = " total harga = " + totalHarga + "\n" + 
                                          " potongan = " + 200000 + "\n" + 
                                          " subtotal = " + subtotal
                                resolve (result1)
                            } else {
                                subtotal = totalHarga - potongan
                                result1 = " total harga = " + totalHarga + "\n" + 
                                          " potongan = " + potongan + "\n" + 
                                          " subtotal = " + subtotal
                                resolve (result1)
                            }
                            
                        } else if (totalHarga < 1900000){
                            subtotal = totalHarga
                            result2 = " total harga = " + totalHarga + "\n" + 
                                      " potongan = 0" + "\n" + 
                                      " subtotal = " + subtotal
                            resolve(result2) 
                        } else{
                            reject(new Error('\n error \n'))
                        }
                    }, 3000);
                })
            }
                
            const result = async() => {
                try {
                    const data = await discount(totalHarga)
                    console.log(data)
                } catch (error) {
                    console.log(error.message)
                } finally {
                   console.log('\n selesai')
                }
            } 

            result()
            // CLOSE CONNECTION
            rl.close();  
          
         
        })
       })
      })
     })
    })       
}

getUserInput();







