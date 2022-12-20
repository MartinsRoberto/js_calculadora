let values = ''
let operadorClicked = false
let fisrtValue = false

document.addEventListener('click',(e) => {

  const element = e.target

  if(element.classList.contains('values')){

    // elemento clicado nao é um numero
    if(element.innerText == '=' && values != ''){
      // caso o ultimo clique tenha sido em um operador será retirado da string Values
      if(operadorClicked){
        values = values.substring(0, values.length - 1);
      }
      document.querySelector('.input-value').innerText = eval(values).toFixed(2)
      fisrtValue = false
      values = ''
      return
    }

    if(isNaN(element.innerText)){
      if(!fisrtValue){
        return
      }
      if(operadorClicked){
        return
      }

      operadorClicked =  true
    }
    else{
      fisrtValue = true
      operadorClicked = false
    }

    values += element.innerText
    document.querySelector('.input-value').innerText = values
  }

})

