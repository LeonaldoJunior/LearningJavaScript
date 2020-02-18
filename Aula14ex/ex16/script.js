function contar(){

   var inicio = window.document.getElementById('inputInicio');
   var fim = window.document.getElementById('inputFim');
   var passo = window.document.getElementById('inputPasso');
   var linkDivResultado = window.document.getElementById('resultado');
   var contador = Number(inicio.value);
   var valorInicio = Number(inicio.value);
   var valorFim = Number(fim.value);
   
   var valorPasso = Number(passo.value);
   if(valorPasso == 0){
      window.alert('[ERRO] Passo zero, assume que passo é 1');
      valorPasso = 1;
   }
   
   if(inicio.value.length == 0 || passo.value.length == 0){
      window.alert('[ERRO] Faltam dados');
   }else{
      linkDivResultado.innerHTML = 'Contando...';
     
      if(valorInicio < valorFim){
         while(contador <= valorFim){
            linkDivResultado.innerHTML += ` ${contador} \u{1F600}`;
            contador += valorPasso;
         }
         linkDivResultado.innerHTML += `\u{1F3C1}`;
      }else {
         while(contador >= valorFim){
            linkDivResultado.innerHTML += ` ${contador} \u{1F600}`;
            contador -= valorPasso;
         }
         linkDivResultado.innerHTML += `\u{1F3C1}`;
      }
   }


}