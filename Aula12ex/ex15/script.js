function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if(fano.value.length == 0 || fano.value > anoAtual){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`);
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = anoAtual - Number(fano.value);
        // res.innerHTML = `Sua idade é  ${idade}`
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'homem';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png');
            } else if (idade < 22){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png');
            }

        } else {
            genero = 'mulher';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png');
            } else if (idade < 22){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png');
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Genero detectado ${genero} idade ${idade}`;
        res.appendChild(img);
    }
}