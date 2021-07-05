// // //Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja
// // // dari kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan
// // // memberikan komentar di bawahnya:

// Create reading interface
const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

console.log("\n = PROGRAM MENENTUKAN BILANGAN PRIMA = \n")

// for input
const getUserInput = () => {
    // input 
    
        rl.question("         masukkan nilai = ", (input) => {
            // LOG DATA
            const cekBilanganPrima = (number) => {
                return new Promise((resolve, reject) =>{
                    console.log('\n           pliese wait...')
                    setTimeout(() => {
                        let bagi = 0;
                        for(i = 1; i <= number; i++){
                            if(number%i == 0){
                                bagi++
                            }
                        }       
                        if(bagi == 2){
                            resolve('\n         ' +number + " Bilangan Prima \n")
                        }else{
                            reject(new Error('\n      ' +number + ' Bukan Bilangan Prima \n'))
                        }
                    }, 3000);
                })
            }
                
            const result = async() => {
                try {
                    const data = await cekBilanganPrima(input)
                    console.log(data)
                } catch (error) {
                    console.log(error.message)
                } finally {
                   console.log('             selesai')
                }
            } 

            result()
            // CLOSE CONNECTION
            rl.close();
            
        })
        
        
             
  
}

getUserInput();







