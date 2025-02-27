const resultC = document.getElementById('resultC');
const resultB = document.getElementById('resultB');
let reload = document.getElementById('reloadFull');

const keyPressedSound = new Audio();
keyPressedSound.src = "key.mp3"
 

window.addEventListener("keydown", e => {

    const keyA = 'a';
    const keyB = 'b'; 

    if(e.key === keyA){

        resultC.innerHTML = `Você digitou a tecla <span>${e.key.toLocaleUpperCase()}</span>`
        document.body.style.backgroundColor = '#E630C3';
        resultC.style.color = 'black';
        keyPressedSound.play();

    } else if (e.key === keyB){

        resultC.innerHTML = `Você digitou a tecla <span>${e.key.toLocaleUpperCase()}</span>`
        document.body.style.backgroundColor = '#4630E6';
        resultC.style.color = 'white';
        keyPressedSound.play();

    } else{

        resultC.innerHTML = `Você digitou a tecla <span>${e.key.toLocaleUpperCase()}</span>`
        document.body.style.backgroundColor = '#F9FAFF';
        resultC.style.color = 'black';
        keyPressedSound.play();
        
    }
 

    resultB.innerHTML = `${e.code}`

 

})

 

//reload

window.addEventListener("keypress", e =>{
   
    setTimeout(() =>{
        if(e.key === 'r'){           
            window.location.reload();
         }   

    }, 400)

});