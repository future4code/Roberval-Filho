```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesQueAparece = 0;
  
  for(let i=0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido === arrayDeNumeros[i]){
      vezesQueAparece += 1 
      
    } 
    }
    if(vezesQueAparece === 0){
      return `Número não encontrado`
     }else {
    return `O número ${numeroEscolhido} aparece ${vezesQueAparece}x`
     }
    
  
}
```