function gerarTabuada(){
    var num = document.getElementById('inputValor');
    var tab = document.getElementById('selTabuada');

    if(num.value.length == 0){
        console.log('[ERRO] Por favor digite um número!');
    } else {
        let n = Number(num.value);
        let c = 0;
        tab.innerHTML = '';
        while (c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item); 
            c++;
        }
    }


}