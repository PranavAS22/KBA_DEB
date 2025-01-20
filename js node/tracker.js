const { log } = require('console');
const exp = require('constants');
const redline=require('readline');
const rl=redline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
opt=0
jan=[]
function type(){
    console.log('1. Enter Speinding Details \n 2.Review Speindind Details'  );
    rl.question('Enter an option ', (opt) => {
        switch (opt) {
            case '1':
                console.log('hi')
                rl.question('Enter Money Spend : ',mon)
                console.log('Scelect the Type of expence : \n 1. shopping \n 2. Hospital \n 3.Other')

                rl.question('Enter an option ', (opt1) => {
                    switch (opt1) {

                        case '1':
                                exp='Shopping'
                            break;

                            case '2':
                                exp='Hospital'
                            break;

                            case '3':
                                rl.question('Enter Type of expence : ',exp)
                            break;
                    
                        default:
                                console.log('Enter a valid option')
                                type()
                            break;
                    }
                    console.log("Scelect  a Month : 1. January \n 2. Febuvary \n 3. March \n 4. April \n 5. may \n 6. June \n 5. July \n ")
                    
                    break;
          
            case '2':
                   
                break;

            default:
                break;
        }
      });
    

}
 type()
