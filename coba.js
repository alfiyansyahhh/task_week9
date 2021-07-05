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
    rl.question(" masukkan nilai = ", (input) => {
        
                // LOG DATA
                const cekBilanganPrima = (number) => {
                    return new Promise((resolve, reject) =>{
                       
                        setTimeout(() => {
                            let bagi = 0;
                            for(i = 1; i <= number; i++){
                                if(number%i == 0){
                                    bagi++
                                }
                            }       
                            if(bagi == 2){
                                resolve(' ' +number + " Bilangan Prima \n")
                            }else{
                                reject(new Error(' ' +number + ' Bukan Bilangan Prima \n'))
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
                    }
                }
                
                result()
                
                // CLOSE CONNECTION
                rl.close();

    })
}

getUserInput();

const cekBilanganPrima = (number) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let bagi = 0;
            for(i = 1; i <= number; i++){
                if(number%i == 0){
                    bagi++
                }
            }       
            if(bagi == 2){
                resolve("bilangan prima")
            }else{
                reject(new Error('bukan bilangan prima'))
            }
        }, 3000);
    })
}

const result = async() => {
    input = 7
    try {
        const data = await cekBilanganPrima(input)
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

result()


