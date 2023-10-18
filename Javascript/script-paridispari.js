

const button = document.querySelector ('.btn-danger')

button.addEventListener('click', function(){
    const pariDispari = document.getElementById('input').value;
    console.log(pariDispari)
    const pari = document.getElementById('pari').value;
    console.log(pari);
    const dispari =document.getElementById('dispari').value;
    console.log(dispari);
    let numeroUtente = document.getElementById('numero').value;
    console.log(numeroUtente);
   
    
    if(numeroUtente < 1 || numeroUtente > 5){
        let write = alert ('Devi inserire un numero da 1 a 5')
        console.log(write)
    }


    function getRndInteger(min,max){
        return Math.floor(Math.random() * (max - min + 1)) + min;   
                
    }
    let numeroComputer = getRndInteger (1,5)
    console.log(numeroComputer)

    
  
    let somma = parseInt(numeroUtente) + parseInt(numeroComputer);
    console.log(somma);



    
    let scritta = ''; 
    

    if (somma % 2 === 0 && pariDispari === pari){
        scritta = 'la somma è pari, l/utente ha vinto'
    
        console.log(scritta)
        
    } else if (somma % 2 !==0 && pariDispari === dispari) {
        scritta = 'La somma è dispari, l/utente ha vinto'
        console.log(scritta)        
        
    } 
    
    let vincitore =''
    
    if (somma % 2 === 0 || pariDispari === dispari){
        vincitore = 'la somma è pari, il computer ha vinto'
        
    }else if (somma % 2 !==0 || pariDispari === pari){
        vincitore = 'la somma è dispari, il computer ha vinto'
    }

})
