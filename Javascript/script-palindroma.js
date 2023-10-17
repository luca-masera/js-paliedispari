

const btn = document.querySelector ('.btn-primary')
let list =[];

btn.addEventListener('click', function confrontaParola(confronta) {

    let parolaUtente = document.getElementById('parola').value;
    
    let stringa = parolaUtente.split('').reverse().join('')
    console.log(stringa)
    

})

