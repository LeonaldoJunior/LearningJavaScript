function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = 19;
    msg.innerHTML = `Agora são ${hora}h`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'Manha.png';
        document.body.style.background = '#e2cd9f';
    }else if (hora < 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f';
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154';
    }

}