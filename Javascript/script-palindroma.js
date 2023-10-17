

const btn = document.querySelector ('.btn-primary')


btn.addEventListener('click', function uguaglianza (str) {

    let parolaUtente = document.getElementById('parola').value;
    
    console.log(parolaUtente)
    
    let stringa = parolaUtente.split('')
    console.log(stringa)
    let reverseStringa = stringa.reverse();
    console.log(reverseStringa)
    let joinStringa = reverseStringa.join('')
    console.log(joinStringa)
    
    
    let write;
    if (parolaUtente === joinStringa){
        write = 'è una parola palindroma '
        
        console.log (write)
        
    } else {
        write = 'non è una parola palindroma'
        console.log (write)
    }
})

