let values = ''
let operador = false
let lastValue 
let fisrtValue = false
document.addEventListener('click',(e) => {

  const element = e.target
  if(element.classList.contains('values')){

    
    if(element.innerText == '='){
      document.querySelector('.input-value').innerText= eval(values).toFixed(2)
      fisrtValue = false
      values = ''
      return
    }

    if(isNaN(element.innerText)){
      // verificando se o primeiro valor ja foi adicionado
      if(!fisrtValue){
        return
      }
      if(operador){
        return
      }

      operador =  true
    }

    else{
      fisrtValue = true
      operador = false
    }
    
    values += element.innerText
    document.querySelector('.input-value').innerText = values
  }

})

