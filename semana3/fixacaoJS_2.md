```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custo
  if(quantidade<12){
    custo = quantidade * 1.3
  } else if(quantidade >= 12){
    custo = quantidade * 1
  }
  return custo
}
```