let values = ''
let operador
let lastValue 

document.addEventListener('click',(e) => {

  const element = e.target
  if(element.classList.contains('values')){

    if(element.innerText == '='){
      document.querySelector('.input-value').innerText= eval(values)
      values = ''
      return
    }

    // verificando se foi algum operador clicado
    if(isNaN(element.innerText)){
      
      //verificando se o operador foi o ultimo elemento clicado
      if(operador == 'true'){
        return
      }

      operador = 'true'
    }

    else{
      operador = 'false'
    }
    
    values += element.innerText
    document.querySelector('.input-value').innerText = values
  }

})