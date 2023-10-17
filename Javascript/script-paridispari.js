

const button = document.querySelector ('.btn-danger')

button.addEventListener('click', function(){
    let numeroUtente = document.getElementById('numero').value;
    console.log(numeroUtente);
    
    if(numeroUtente < 1 || numeroUtente > 5){
        let write = alert ('Devi inserire un numero da 1 a 5')
        console.log(write)
    }

})