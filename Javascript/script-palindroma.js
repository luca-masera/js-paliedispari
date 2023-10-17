

const btn = document.querySelector ('.btn-primary')
let list =[];

btn.addEventListener('click', function uguaglianza ( stringa) {

    let parolaUtente = document.getElementById('parola').value;
    parolaUtente ='';
    
    let stringa = parolaUtente.split('').reverse().join('');
    console.log(stringa)
    
    
    /*if (stringa === parolaUtente.reverse()){
        let write = 'è una parola palindroma '
    }*/

})

