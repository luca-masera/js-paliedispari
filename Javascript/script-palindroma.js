

const btn = document.querySelector ('.btn-primary')
let list =[];

btn.addEventListener('click', function uguaglianza () {

    let parolaUtente = document.getElementById('parola').value;
    parolaUtente ='';
    
    let stringa = parolaUtente.split('')
    console.log(stringa)
    let reverseStringa = stringa.reverse();
    console.log(reverseStringa)
    let joinStringa = reverseStringa.join('')
    console.log(joinStringa)
    
    
    
    if (stringa === parolaUtente.reverse()){
        let write = 'è una parola palindroma '
    }

})

