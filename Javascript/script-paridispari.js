

const button = document.querySelector ('.btn-danger')

button.addEventListener('click', function(){
    let pariDispari = document.getElementById('input').value;
    console.log(pariDispari)
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
    

    if (somma % 2 === 0){
        scritta = 'la somma è pari'
    
        console.log(scritta)
        
    } else if (somma % 2 !==0) {
        scritta = 'La somma è dispari'
        console.log(scritta)        
    }


})
